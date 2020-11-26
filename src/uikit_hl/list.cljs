(ns uikit-hl.list
  (:refer-clojure :exclude [list])
  (:require [hoplon.core :as h]))

(defmulti uk-list! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-list! elem key val))

(defn- format-list [list]
  (str "uk-list-" list))

(defmethod uk-list! ::default
  [elem kw v]
  (h/do! elem :class {(format-list (name kw)) v}))

(defmethod uk-list! ::list
  [elem kw v]
  (h/do! elem :class {:uk-list v}))

(h/defelem list [{:keys [disc circle square decimal hyphen muted emphasis primary secondary bullet divider striped large collapse] :as attr} kids]
  (h/ul
    (dissoc attr :disc :circle :square :decimal :hyphen :muted :emphasis :primary :secondary :bullet :divider :striped :large :collapse)
    ::list      true
    ::disc      disc
    ::circle    circle
    ::square    square
    ::decimal   decimal
    ::hyphen    hyphen
    ::muted     muted
    ::emphasis  emphasis
    ::primary   primary
    ::secondary secondary
    ::bullet    bullet
    ::divider   divider
    ::striped   striped
    ::large     large
    ::collapse  collapse
    kids))

(h/defelem item [attr kids]
  (h/li attr kids))
