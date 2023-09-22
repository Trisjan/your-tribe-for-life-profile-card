import { c as create_ssr_component, d as add_attribute, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, v as validate_component, k as each, e as escape, m as missing_component } from "./ssr.js";
import { isFilled, asImageWidthSrcSet, asImagePixelDensitySrcSet, asLinkAttrs } from "@prismicio/client";
import { asTree } from "@prismicio/richtext";
const PrismicEmbed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return ` ${isFilled.embed(field) ? `<div${add_attribute("data-oembed", field.embed_url, 0)}${add_attribute("data-oembed-type", field.type, 0)}${add_attribute("data-oembed-provider", field.provider_name, 0)}> <!-- HTML_TAG_START -->${field.html}<!-- HTML_TAG_END --></div>` : ``}`;
});
const PrismicImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "field",
    "imgixParams",
    "alt",
    "fallbackAlt",
    "width",
    "height",
    "widths",
    "pixelDensities"
  ]);
  let { field } = $$props;
  let { imgixParams = {} } = $$props;
  let { alt = void 0 } = $$props;
  let { fallbackAlt = void 0 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { widths = void 0 } = $$props;
  let { pixelDensities = void 0 } = $$props;
  let src = void 0;
  let srcset = void 0;
  let resolvedWidth = void 0;
  let resolvedHeight = void 0;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.imgixParams === void 0 && $$bindings.imgixParams && imgixParams !== void 0)
    $$bindings.imgixParams(imgixParams);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fallbackAlt === void 0 && $$bindings.fallbackAlt && fallbackAlt !== void 0)
    $$bindings.fallbackAlt(fallbackAlt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  if ($$props.pixelDensities === void 0 && $$bindings.pixelDensities && pixelDensities !== void 0)
    $$bindings.pixelDensities(pixelDensities);
  {
    {
      if (isFilled.imageThumbnail(field)) {
        const castInt = (input) => {
          if (typeof input === "number" || typeof input === "undefined" || input === null) {
            return input;
          } else {
            const parsed = Number.parseInt(input);
            if (Number.isNaN(parsed)) {
              return void 0;
            } else {
              return parsed;
            }
          }
        };
        const ar = field.dimensions.width / field.dimensions.height;
        const castedWidth = castInt(width);
        const castedHeight = castInt(height);
        resolvedWidth = castedWidth ?? field.dimensions.width;
        resolvedHeight = castedHeight ?? field.dimensions.height;
        if (castedWidth != null && castedHeight == null) {
          resolvedHeight = castedWidth / ar;
        } else if (castedWidth == null && castedHeight != null) {
          resolvedWidth = castedHeight * ar;
        }
        if (widths || !pixelDensities) {
          const res = asImageWidthSrcSet(field, {
            ...imgixParams,
            widths: widths === "defaults" ? void 0 : widths
          });
          src = res.src;
          srcset = res.srcset;
        } else if (pixelDensities) {
          const res = asImagePixelDensitySrcSet(field, {
            ...imgixParams,
            pixelDensities: pixelDensities === "defaults" ? void 0 : pixelDensities
          });
          src = res.src;
          srcset = res.srcset;
        }
      }
    }
  }
  return ` ${isFilled.imageThumbnail(field) ? `<img${spread(
    [
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      {
        alt: escape_attribute_value(alt ?? (field.alt || fallbackAlt))
      },
      {
        width: escape_attribute_value(resolvedWidth)
      },
      {
        height: escape_attribute_value(resolvedHeight)
      },
      escape_object($$restProps)
    ],
    {}
  )}>` : ``}`;
});
const PrismicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let linkAttrs;
  let resolvedRel;
  let $$restProps = compute_rest_props($$props, ["field", "document", "rel"]);
  let { field = void 0 } = $$props;
  let { document = void 0 } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.document === void 0 && $$bindings.document && document !== void 0)
    $$bindings.document(document);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  linkAttrs = asLinkAttrs(field ?? document, {
    rel: typeof rel === "function" ? rel : void 0
  });
  resolvedRel = typeof rel === "string" ? rel : linkAttrs.rel;
  return ` <a${spread(
    [
      escape_object(linkAttrs),
      { rel: escape_attribute_value(resolvedRel) },
      {
        href: escape_attribute_value(linkAttrs.href)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const DefaultComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { node } = $$props;
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  return `${node.type === "heading1" ? `<h1>${slots.default ? slots.default({}) : ``}</h1>` : `${node.type === "heading2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${node.type === "heading3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${node.type === "heading4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${node.type === "heading5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${node.type === "heading6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : `${node.type === "paragraph" ? `<p>${slots.default ? slots.default({}) : ``}</p>` : `${node.type === "preformatted" ? `<pre>${slots.default ? slots.default({}) : ``}</pre>` : `${node.type === "strong" ? `<strong>${slots.default ? slots.default({}) : ``}</strong>` : `${node.type === "em" ? `<em>${slots.default ? slots.default({}) : ``}</em>` : `${node.type === "list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "o-list-item" ? `<li>${slots.default ? slots.default({}) : ``}</li>` : `${node.type === "group-list-item" ? `<ul>${slots.default ? slots.default({}) : ``}</ul>` : `${node.type === "group-o-list-item" ? `<ol>${slots.default ? slots.default({}) : ``}</ol>` : `${node.type === "image" ? `<p class="block-img">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: node }, {}, {})}</p>` : `${node.type === "embed" ? `${validate_component(PrismicEmbed, "PrismicEmbed").$$render($$result, { field: node.oembed }, {}, {})}` : `${node.type === "hyperlink" ? `${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: node.data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${node.type === "label" ? `<span${add_attribute("class", node.data.label, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${each(node.text.split("\n"), (line, index) => {
    return ` ${index > 0 ? `<br>` : ``}${escape(line)}`;
  })}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
const Serialize = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { components: components2 = {} } = $$props;
  let { children } = $$props;
  const CHILD_TYPE_RENAMES = {
    "list-item": "listItem",
    "o-list-item": "oListItem",
    "group-list-item": "list",
    "group-o-list-item": "oList"
  };
  function getComponent(child) {
    return components2[CHILD_TYPE_RENAMES[child.type] || child.type] || DefaultComponent;
  }
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  return `${each(children, (child) => {
    return `${validate_component(getComponent(child) || missing_component, "svelte:component").$$render($$result, { node: child.node }, {}, {
      default: () => {
        return ` ${child.children.length > 0 ? `${validate_component(Serialize, "svelte:self").$$render($$result, { children: child.children, components: components2 }, {}, {})}` : ``}`;
      }
    })}`;
  })}`;
});
const PrismicRichText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let children;
  let { field } = $$props;
  let { components: components2 = {} } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  children = asTree(field).children;
  return ` ${validate_component(Serialize, "Serialize").$$render($$result, { children, components: components2 }, {}, {})}`;
});
const TodoComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  "slice_type" in slice ? slice.slice_type : slice.type;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `${``}`;
});
const SliceZone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slices = [] } = $$props;
  let { components: components2 = {} } = $$props;
  let { context = {} } = $$props;
  let { defaultComponent = void 0 } = $$props;
  if ($$props.slices === void 0 && $$bindings.slices && slices !== void 0)
    $$bindings.slices(slices);
  if ($$props.components === void 0 && $$bindings.components && components2 !== void 0)
    $$bindings.components(components2);
  if ($$props.context === void 0 && $$bindings.context && context !== void 0)
    $$bindings.context(context);
  if ($$props.defaultComponent === void 0 && $$bindings.defaultComponent && defaultComponent !== void 0)
    $$bindings.defaultComponent(defaultComponent);
  return ` ${each(slices, (slice, index) => {
    let type = "slice_type" in slice ? slice.slice_type : slice.type, Component = components2[type] || defaultComponent;
    return `  ${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, { slice, slices, context, index }, {}, {})}` : `${validate_component(TodoComponent, "TodoComponent").$$render($$result, { slice }, {}, {})}`}`;
  })}`;
});
const ProfileCardFront = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  return `<section${add_attribute("data-slice-type", slice.slice_type, 0)}${add_attribute("data-slice-variation", slice.variation, 0)}>Placeholder component for ${escape(slice.slice_type)} (variation: ${escape(slice.variation)}) Slices</section>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');.profile-card.svelte-1s7jubm{display:flex;max-width:100%;max-height:100%;font-family:'DM Serif Text', serif;color:#395259;width:832px;height:600px;left:50vw;filter:drop-shadow(2px 2px 8px #000000)}h1.svelte-1s7jubm{font-size:40px;font-weight:500;margin:0;padding:0}.leftside.svelte-1s7jubm{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr);background-color:#FFFFFF;width:366px;height:600px;padding:0 25px}.leftside-top.svelte-1s7jubm{grid-area:1 / 1 / 2 / 2}.leftside-middle.svelte-1s7jubm{grid-area:2 / 2 / 3 / 3;display:flex;justify-content:center;align-items:center}.leftside-bottom.svelte-1s7jubm{grid-area:3 / 3 / 4 / 4;text-align:right}.rightside.svelte-1s7jubm{max-width:100%;background-color:#D2B396;width:416px;height:600px;display:flex;align-items:center;justify-content:center}@media(max-width: 55rem){.profile-card.svelte-1s7jubm{flex-direction:column;align-items:center;justify-content:center;max-height:100%}.leftside.svelte-1s7jubm{height:400px}.rightside.svelte-1s7jubm{height:400px}h1.svelte-1s7jubm{font-size:30px}.leftside-bottom.svelte-1s7jubm{font-size:12px}}",
  map: null
};
const ProfileCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slice } = $$props;
  if ($$props.slice === void 0 && $$bindings.slice && slice !== void 0)
    $$bindings.slice(slice);
  $$result.css.add(css);
  return `<section class="profile-card svelte-1s7jubm"><section class="leftside svelte-1s7jubm"><h1 class="leftside-top svelte-1s7jubm">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.name }, {}, {})}</h1> <section class="leftside-middle svelte-1s7jubm">${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.logo, class: "logo" }, {}, {})}</section> <section class="leftside-bottom svelte-1s7jubm">${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.info_student }, {}, {})} ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.info_opleiding }, {}, {})} ${validate_component(PrismicRichText, "PrismicRichText").$$render($$result, { field: slice.primary.email }, {}, {})} <section class="leftside-bottom-socials">${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: slice.primary.github }, {}, {
    default: () => {
      return `${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.logo_github }, {}, {})}`;
    }
  })} ${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: slice.primary.linkedin }, {}, {
    default: () => {
      return `${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.logo_linkedin }, {}, {})}`;
    }
  })} ${validate_component(PrismicLink, "PrismicLink").$$render($$result, { field: slice.primary.instagram }, {}, {
    default: () => {
      return `${validate_component(PrismicImage, "PrismicImage").$$render($$result, { field: slice.primary.logo_insta }, {}, {})}`;
    }
  })}</section></section></section> <section class="rightside svelte-1s7jubm">${validate_component(PrismicImage, "PrismicImage").$$render(
    $$result,
    {
      field: slice.primary.profile_picture,
      class: "profilepicture"
    },
    {},
    {}
  )}</section> </section>`;
});
const components = {
  profile_card_front: ProfileCardFront,
  rich_text: ProfileCard
};
export {
  SliceZone as S,
  components as c
};
