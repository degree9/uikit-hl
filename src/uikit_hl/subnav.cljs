(ns uikit-hl.subnav
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-subnav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-subnav! elem key val))

(defn- format-subnav [subnav]
  (str "uk-subnav-" subnav))

(defmethod uk-subnav! ::default
  [elem kw v]
  (h/do! elem :class {(format-subnav (name kw)) v}))

(defmethod uk-subnav! ::subnav
  [elem _ v]
  (h/do! elem :class {:uk-subnav v}))

(h/defelem item [attr kids]
  (h/li attr kids))

(h/defelem subnav [{:keys [divider pill] :as attr} kids]
  (h/ul
    (dissoc attr :divider)
    ::subnav true
    ::divider divider
    ::pill pill
    kids))
