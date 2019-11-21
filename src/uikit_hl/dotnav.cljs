(ns uikit-hl.dotnav
  (:require [hoplon.core :as h]))

(defmulti uk-dotnav! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-dotnav! elem key val))

(defn- format-dotnav [dotnav]
  (str "uk-dotnav-" dotnav))

(defmethod uk-dotnav! ::default
  [elem kw v]
  (h/do! elem :class {(format-dotnav (name kw)) v}))

(defmethod uk-dotnav! ::dotnav
  [elem kw v]
  (h/do! elem :class {:uk-dotnav v}))

(defmethod uk-dotnav! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(h/defelem dotnav [{:keys [vertical] :as attr} kids]
  (h/ul
    (dissoc attr :vertical)
    ::dotnav true
    ::vertical vertical
    kids))

(h/defelem item [attr kids]
  (h/li attr kids))
