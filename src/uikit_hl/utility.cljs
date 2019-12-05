(ns uikit-hl.utility
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-utility! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-utility! elem key val))

(defn- format-utility [utility]
  (str "uk-utility-" utility))

(defmethod uk-utility! ::default
  [elem kw v]
  (h/do! elem :class {(format-utility (name kw)) v}))

(defmethod uk-utility! ::panel
  [elem kw v]
  (h/do! elem :class {:uk-panel v}))

(h/defelem panel [{:keys [scrollable] :as attr} kids]
  (h/div
    (dissoc attr :scrollable)
    ::panel true
    ::scrollable scrollable
    kids))

(defmethod uk-utility! ::float-left
  [elem kw v]
  (h/do! elem :class {:uk-float-left v}))

(defmethod uk-utility! ::float-right
  [elem kw v]
  (h/do! elem :class {:uk-float-right v}))

(defmethod uk-utility! ::clearfix
  [elem kw v]
  (h/do! elem :class {:uk-clearfix v}))

(defmethod uk-utility! ::overflow-hidden
  [elem kw v]
  (h/do! elem :class {:uk-overflow-hidden v}))

(defmethod uk-utility! ::overflow-auto
  [elem kw v]
  (h/do! elem :uk-overflow-auto v))

(defmethod uk-utility! ::resize
  [elem kw v]
  (h/do! elem :class {:uk-resize v}))

(defmethod uk-utility! ::resize-vertical
  [elem kw v]
  (h/do! elem :class {:uk-resize-vertical v}))

(defmethod uk-utility! ::display-block
  [elem kw v]
  (h/do! elem :class {:uk-display-block v}))

(defmethod uk-utility! ::display-inline
  [elem kw v]
  (h/do! elem :class {:uk-display-inline v}))

(defmethod uk-utility! ::display-inline-block
  [elem kw v]
  (h/do! elem :class {:uk-display-inline-block v}))

(defmethod uk-utility! ::inline
  [elem kw v]
  (h/do! elem :class {:uk-inline v}))

(defmethod uk-utility! ::inline-clip
  [elem kw v]
  (h/do! elem :class {:uk-inline-clip v}))

(defmethod uk-utility! ::responsive-width
  [elem kw v]
  (h/do! elem :class {:uk-responsive-width v}))

(defmethod uk-utility! ::responsive-height
  [elem kw v]
  (h/do! elem :class {:uk-responsive-height v}))

(defmethod uk-utility! ::preserve-width
  [elem kw v]
  (h/do! elem :class {:uk-preserve-width v}))

(defmethod uk-utility! ::border-rounded
  [elem kw v]
  (h/do! elem :class {:uk-border-rounded v}))

(defmethod uk-utility! ::border-circle
  [elem kw v]
  (h/do! elem :class {:uk-border-circle v}))

(defmethod uk-utility! ::border-pill
  [elem kw v]
  (h/do! elem :class {:uk-border-pill v}))

(defmethod uk-utility! ::box-shadow-small
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-small v}))

(defmethod uk-utility! ::box-shadow-medium
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-medium v}))

(defmethod uk-utility! ::box-shadow-large
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-large v}))

(defmethod uk-utility! ::box-shadow-xlarge
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-xlarge v}))

(defmethod uk-utility! ::box-shadow-bottom
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-bottom v}))

(defmethod uk-utility! ::box-shadow-hover-small
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-hover-small v}))

(defmethod uk-utility! ::box-shadow-hover-medium
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-hover-medium v}))

(defmethod uk-utility! ::box-shadow-hover-large
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-hover-large v}))

(defmethod uk-utility! ::box-shadow-hover-xlarge
  [elem kw v]
  (h/do! elem :class {:uk-box-shadow-hover-xlarge v}))

(defmethod uk-utility! ::dropcap
  [elem kw v]
  (h/do! elem :class {:uk-dropcap v}))

(defmethod uk-utility! ::logo
  [elem kw v]
  (h/do! elem :class {:uk-logo v}))

(defmethod uk-utility! ::blend-multiply
  [elem kw v]
  (h/do! elem :class {:uk-blend-multiply v}))

(defmethod uk-utility! ::blend-screen
  [elem kw v]
  (h/do! elem :class {:uk-blend-screen v}))

(defmethod uk-utility! ::blend-overlay
  [elem kw v]
  (h/do! elem :class {:uk-blend-overlay v}))

(defmethod uk-utility! ::blend-darken
  [elem kw v]
  (h/do! elem :class {:uk-blend-darken v}))

(defmethod uk-utility! ::blend-lighten
  [elem kw v]
  (h/do! elem :class {:uk-blend-lighten v}))

(defmethod uk-utility! ::blend-color-dodge
  [elem kw v]
  (h/do! elem :class {:uk-blend-color-dodge v}))

(defmethod uk-utility! ::blend-color-burn
  [elem kw v]
  (h/do! elem :class {:uk-blend-color-burn v}))

(defmethod uk-utility! ::blend-hard-light
  [elem kw v]
  (h/do! elem :class {:uk-blend-hard-light v}))

(defmethod uk-utility! ::blend-soft-light
  [elem kw v]
  (h/do! elem :class {:uk-blend-soft-light v}))

(defmethod uk-utility! ::blend-difference
  [elem kw v]
  (h/do! elem :class {:uk-blend-difference v}))

(defmethod uk-utility! ::blend-exclusion
  [elem kw v]
  (h/do! elem :class {:uk-blend-exclusion v}))

(defmethod uk-utility! ::blend-hue
  [elem kw v]
  (h/do! elem :class {:uk-blend-hue v}))

(defmethod uk-utility! ::blend-saturation
  [elem kw v]
  (h/do! elem :class {:uk-blend-saturation v}))

(defmethod uk-utility! ::blend-color
  [elem kw v]
  (h/do! elem :class {:uk-blend-color v}))

(defmethod uk-utility! ::blend-luminosity
  [elem kw v]
  (h/do! elem :class {:uk-blend-luminosity v}))

(defmethod uk-utility! ::transform-origin-top-left
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-top-left v}))

(defmethod uk-utility! ::transform-origin-top-center
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-top-center v}))

(defmethod uk-utility! ::transform-origin-top-right
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-top-right v}))

(defmethod uk-utility! ::transform-origin-center-left
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-center-left v}))

(defmethod uk-utility! ::transform-origin-center-right
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-center-right v}))

(defmethod uk-utility! ::transform-origin-bottom-left
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-bottom-left v}))

(defmethod uk-utility! ::transform-origin-bottom-center
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-bottom-center v}))

(defmethod uk-utility! ::transform-origin-bottom-right
  [elem kw v]
  (h/do! elem :class {:uk-transform-origin-bottom-right v}))

(defmethod uk-utility! ::disabled
  [elem kw v]
  (h/do! elem :class {:uk-disabled v}))

(defmethod uk-utility! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-utility! ::drag
  [elem kw v]
  (h/do! elem :class {:uk-drag v}))
