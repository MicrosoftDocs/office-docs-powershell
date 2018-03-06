---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPView

## SYNOPSIS
Change view properties

## SYNTAX 

```powershell
Set-PnPView -Identity <ViewPipeBind>
            -Values <Hashtable>
            [-List <ListPipeBind>]
            [-Web <WebPipeBind>]
            [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Sets one or more properties of an existing view.

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

## PARAMETERS

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