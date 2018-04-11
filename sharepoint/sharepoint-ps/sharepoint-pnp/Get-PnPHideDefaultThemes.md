---
external help file:
applicable: SharePoint Online
schema: 2.0.0
---
# Get-PnPHideDefaultThemes

## SYNOPSIS
Returns if the default / OOTB themes should be visible to users or not.

## SYNTAX 

```powershell
Get-PnPHideDefaultThemes [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Returns if the default themes are visible. Use Set-PnPHideDefaultThemes to change this value.

You must be a SharePoint Online global administrator to run the cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHideDefaultThemes
```

This example returns the current setting if the default themes should be visible

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)