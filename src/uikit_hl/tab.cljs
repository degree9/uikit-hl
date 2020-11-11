(ns uikit-hl.tab
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-tab! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-tab! elem key val))

(defn- format-tab [tab]
  (str "uk-tab-" tab))

(defmethod uk-tab! ::default
  [elem kw v]
  (h/do! elem :class {(format-tab (name kw)) v}))

(defmethod uk-tab! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-tab! ::disabled
  [elem kw v]
  (h/do! elem :class {:uk-disabled v}))

(defmethod uk-tab! ::tab
  [elem _ v]
  (uk/tab elem v))

(h/defelem tab [{:keys [tab bottom left right] :or {tab {}} :as attr} kids]
  (h/ul
    (dissoc attr :tab :bottom :left :right)
    ::tab tab
    ::bottom bottom
    ::left left
    ::right right
    kids))

(h/defelem item [attr kids]
  (h/li attr kids))
