(ns uikit-hl.breadcrumb
  (:require [hoplon.core :as h]))

(defmulti uk-breadcrumb! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-breadcrumb! elem key val))

(defn- format-breadcrumb [breadcrumb]
  (str "uk-breadcrumb-" breadcrumb))

(defmethod uk-breadcrumb! ::default
  [elem kw v]
  (h/do! elem :class {(format-breadcrumb (name kw)) v}))

(defmethod uk-breadcrumb! ::breadcrumb
  [elem kw v]
  (h/do! elem :class {:uk-breadcrumb v}))

(h/defelem breadcrumb [attr kids]
  (h/ul attr ::breadcrumb true kids))

(h/defelem item [attr kids]
  (h/li attr kids))
