---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpview
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Set-PnPView
---

# Set-PnPView

## SYNOPSIS
Change view properties

## SYNTAX 

```powershell
Set-PnPView -Identity <ViewPipeBind>
            [-List <ListPipeBind>]
            [-Values <Hashtable>]
            [-Fields <String[]>]
            [-Aggregations <String>]
            [-Web <WebPipeBind>]
            [-Connection <PnPConnection>]
```

## DESCRIPTION
Sets one or more properties of an existing view, see here https://docs.microsoft.com/previous-versions/office/sharepoint-server/ee543328(v=office.15) for the list of view properties.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPView -List "Tasks" -Identity "All Tasks" -Values @{JSLink="hierarchytaskslist.js|customrendering.js";Title="My view"}
```

Updates the "All Tasks" view on list "Tasks" to use hierarchytaskslist.js and customrendering.js for the JSLink and changes the title of the view to "My view"

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPList -Identity "Tasks" | Get-PnPView | Set-PnPView -Values @{JSLink="hierarchytaskslist.js|customrendering.js"}
```

Updates all views on list "Tasks" to use hierarchytaskslist.js and customrendering.js for the JSLink

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPView -List "Documents" -Identity "Corporate Documents" -Fields "Title","Created"
```

Updates the Corporate Documents view on the Documents library to have two fields

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPView -List "Documents" -Identity "Corporate Documents" -Fields "Title","Created" -Aggregations "<FieldRef Name='Title' Type='COUNT'/>"
```

Updates the Corporate Documents view on the Documents library and sets the totals (aggregations) to Count on the Title field

## PARAMETERS

### -Aggregations
A valid XML fragment containing one or more Aggregations

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Fields
An array of fields to use in the view. Notice that specifying this value will remove the existing fields

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The Id, Title or instance of the view

```yaml
Type: ViewPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -List
The Id, Title or Url of the list

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Values
Hashtable of properties to update on the view. Use the syntax @{property1="value";property2="value"}.

```yaml
Type: Hashtable
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
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

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)