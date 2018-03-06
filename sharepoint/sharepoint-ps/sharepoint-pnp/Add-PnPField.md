---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Add-PnPField

## SYNOPSIS
Add a field

## SYNTAX 

### Add field by XML to list
```powershell
Add-PnPField [-AddToDefaultView [<SwitchParameter>]]
             [-Required [<SwitchParameter>]]
             [-Group <String>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### Add field reference to list
```powershell
Add-PnPField -List <ListPipeBind>
             -Field <FieldPipeBind>
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### Add field to list
```powershell
Add-PnPField -DisplayName <String>
             -InternalName <String>
             -Type <FieldType>
             [-List <ListPipeBind>]
             [-Id <GuidPipeBind>]
             [-AddToDefaultView [<SwitchParameter>]]
             [-Required [<SwitchParameter>]]
             [-Group <String>]
             [-ClientSideComponentId <GuidPipeBind>]
             [-ClientSideComponentProperties <String>]
             [-Choices <String[]>]
             [-Formula <String>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### Add field to web
```powershell
Add-PnPField -DisplayName <String>
             -InternalName <String>
             -Type <FieldType>
             [-Id <GuidPipeBind>]
             [-ClientSideComponentId <GuidPipeBind>]
             [-ClientSideComponentProperties <String>]
             [-Choices <String[]>]
             [-Formula <String>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

### Add field to Web
```powershell
Add-PnPField -DisplayName <String>
             -InternalName <String>
             -Type <FieldType>
             [-Id <GuidPipeBind>]
             [-Choices <String[]>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Adds a field to a list or as a site column

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPField -Type Calculated -InternalName "C1" -DisplayName "C1" -Formula ="[Title]"
```

Adds a new calculated site column with the formula specified

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPField -List "Demo list" -DisplayName "Location" -InternalName "SPSLocation" -Type Choice -Group "Demo Group" -AddToDefaultView -Choices "Stockholm","Helsinki","Oslo"
```

This will add a field of type Choice to the list "Demo List".

### ------------------EXAMPLE 3------------------
```powershell
PS:>Add-PnPField -List "Demo list" -DisplayName "Speakers" -InternalName "SPSSpeakers" -Type MultiChoice -Group "Demo Group" -AddToDefaultView -Choices "Obiwan Kenobi","Darth Vader", "Anakin Skywalker"
```

This will add a field of type Multiple Choice to the list "Demo List". (you can pick several choices for the same item)

## PARAMETERS

### -AddToDefaultView
Switch Parameter if this field must be added to the default view

```yaml
Type: SwitchParameter
Parameter Sets: Add field to list, Add field by XML to list

Required: False
Position: Named
Accept pipeline input: False
```

### -Choices
Specify choices, only valid if the field type is Choice

```yaml
Type: String[]
Parameter Sets: Add field to list

Required: False
Position: 0
Accept pipeline input: False
```

### -ClientSideComponentId
The Client Side Component Id to set to the field

Only applicable to: SharePoint Online

```yaml
Type: GuidPipeBind
Parameter Sets: Add field to list, Add field to web

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientSideComponentProperties
The Client Side Component Properties to set to the field

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Add field to list, Add field to web

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName
The display name of the field

```yaml
Type: String
Parameter Sets: Add field to list, Add field to web

Required: True
Position: Named
Accept pipeline input: False
```

### -Field
The name of the field, its ID or an actual field object that needs to be added

```yaml
Type: FieldPipeBind
Parameter Sets: Add field reference to list

Required: True
Position: Named
Accept pipeline input: False
```

### -Formula
Specify the formula. Only available if the field type is Calculated

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Add field to list

Required: False
Position: 0
Accept pipeline input: False
```

### -Group
The group name to where this field belongs to

```yaml
Type: String
Parameter Sets: Add field to list, Add field by XML to list

Required: False
Position: Named
Accept pipeline input: False
```

### -Id
The ID of the field, must be unique

```yaml
Type: GuidPipeBind
Parameter Sets: Add field to list, Add field to web

Required: False
Position: Named
Accept pipeline input: False
```

### -InternalName
The internal name of the field

```yaml
Type: String
Parameter Sets: Add field to list, Add field to web

Required: True
Position: Named
Accept pipeline input: False
```

### -List
The name of the list, its ID or an actual list object where this field needs to be added

```yaml
Type: ListPipeBind
Parameter Sets: Add field to list, Add field reference to list

Required: False
Position: Named
Accept pipeline input: True
```

### -Required
Switch Parameter if the field is a required field

```yaml
Type: SwitchParameter
Parameter Sets: Add field to list, Add field by XML to list

Required: False
Position: Named
Accept pipeline input: False
```

### -Type
The type of the field like Choice, Note, MultiChoice

```yaml
Type: FieldType
Parameter Sets: Add field to list, Add field to web

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Field

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)