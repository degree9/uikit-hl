(ns uikit-hl.pagination
  (:require [hoplon.core :as h]))

(defmulti uk-pagination! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-pagination! elem key val))

(defn- format-pagination [pagination]
  (str "uk-pagination-" pagination))

(defmethod uk-pagination! ::default
  [elem kw v]
  (h/do! elem :class {(format-pagination (name kw)) v}))

(defmethod uk-pagination! ::pagination
  [elem kw v]
  (h/do! elem :class {:uk-pagination v}))

(defmethod uk-pagination! ::active
  [elem kw v]
  (h/do! elem :class {:uk-active v}))

(defmethod uk-pagination! ::disabled
  [elem kw v]
  (h/do! elem :class {:uk-disabled v}))

(defmethod uk-pagination! ::next
  [elem kw v]
  (h/do! elem :uk-pagination-next v))

(defmethod uk-pagination! ::previous
  [elem kw v]
  (h/do! elem :uk-pagination-previous v))

(h/defelem pagination [attr kids]
  (h/ul attr ::pagination true kids))

(h/defelem next [attr kids]
  (h/li (h/a (h/span attr ::next true kids))))

(h/defelem previous [attr kids]
  (h/li (h/a (h/span attr ::previous true kids))))
