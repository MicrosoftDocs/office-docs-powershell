---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPField

## SYNOPSIS
Changes one or more properties of a field in a specific list or for the whole web

## SYNTAX 

```powershell
Set-PnPField -Identity <FieldPipeBind>
             -Values <Hashtable>
             [-List <ListPipeBind>]
             [-UpdateExistingLists [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPField -Identity AssignedTo -Values @{JSLink="customrendering.js";Group="My fields"}
```

Updates the AssignedTo field on the current web to use customrendering.js for the JSLink and sets the group name the field is categorized in to "My Fields". Lists that are already using the AssignedTo field will not be updated.

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPField -Identity AssignedTo -Values @{JSLink="customrendering.js";Group="My fields"} -UpdateExistingLists
```

Updates the AssignedTo field on the current web to use customrendering.js for the JSLink and sets the group name the field is categorized in to "My Fields". Lists that are already using the AssignedTo field will also be updated.

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPField -List "Tasks" -Identity "AssignedTo" -Values @{JSLink="customrendering.js"}
```

Updates the AssignedTo field on the Tasks list to use customrendering.js for the JSLink

## PARAMETERS

### -Identity
The field object, internal field name (case sensitive) or field id to update

```yaml
Type: FieldPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -List
The list object, name or id where to update the field. If omited the field will be updated on the web.

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -UpdateExistingLists
If provided, the field will be updated on existing lists that use it as well. If not provided or set to $false, existing lists using the field will remain unchanged but new lists will get the updated field.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Values
Hashtable of properties to update on the field. Use the syntax @{property1="value";property2="value"}.

```yaml
Type: Hashtable
Parameter Sets: (All)

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