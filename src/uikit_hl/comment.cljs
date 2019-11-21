(ns uikit-hl.comment
  (:require [hoplon.core :as h]))

(defmulti uk-comment! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-comment! elem key val))

(defn- format-comment [comment]
  (str "uk-comment-" comment))

(defmethod uk-comment! ::default
  [elem kw v]
  (h/do! elem :class {(format-comment (name kw)) v}))

(defmethod uk-comment! ::comment
  [elem kw v]
  (h/do! elem :class {:uk-comment v}))

(h/defelem comment [{:keys [primary] :as attr} kids]
  (h/article
    (dissoc attr :primary)
    ::comment true
    ::primary primary
    kids))

(h/defelem header [attr kids]
  (h/header attr ::header true kids))

(h/defelem avatar [attr kids]
  (h/img attr ::avatar true kids))

(h/defelem title [attr kids]
  (h/h4 attr ::title true kids))

(h/defelem meta [attr kids]
  (h/ul attr ::meta true kids))

(h/defelem body [attr kids]
  (h/div attr ::body true kids))

(h/defelem list [attr kids]
  (h/ul attr ::list true kids))
