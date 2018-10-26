---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Get-PnPException

## SYNOPSIS
Returns the last exception that occured

## SYNTAX 

```powershell
Get-PnPException [-All [<SwitchParameter>]]
```

## DESCRIPTION
Returns the last exception which can be used while debugging PnP Cmdlets

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPException
```

Returns the last exception

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPException -All
```

Returns all exceptions that occurred

## PARAMETERS

### -All
Show all exceptions

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)