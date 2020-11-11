(ns uikit-hl.nav
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-nav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-nav! elem key val))

(defn- format-nav [nav]
  (str "uk-nav-" nav))

(defmethod uk-nav! ::default
  [elem kw v]
  (h/do! elem :class {(format-nav (name kw)) v}))

(defmethod uk-nav! ::nav
  [elem _ v]
  (uk/nav elem v))

(defmethod uk-nav! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-nav! ::parent
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(h/defelem nav [{:keys [nav default parent-icon primary center] :or {nav {}} :as attr} kids]
  (h/ul
    (dissoc attr :nav :default :parent-icon :primary :center)
    ::nav nav
    ::default default
    ::parent-icon parent-icon
    ::center center
    kids))

(h/defelem parent [attr kids]
  (h/li
    attr
    ::parent true
    kids))

(h/defelem subnav [attr kids]
  (h/ul
    attr
    ::sub true
    kids))

(h/defelem header [attr kids]
  (h/li
    attr
    ::header true
    kids))

(h/defelem divider [attr kids]
  (h/li
    attr
    ::divider true
    kids))

(h/defelem item [attr kids]
  (h/li attr kids))
