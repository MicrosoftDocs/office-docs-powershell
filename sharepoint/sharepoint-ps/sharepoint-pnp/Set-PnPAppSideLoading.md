---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpappsideloading
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Set-PnPAppSideLoading
---

# Set-PnPAppSideLoading

## SYNOPSIS
Enables the App SideLoading Feature on a site

## SYNTAX 

### On
```powershell
Set-PnPAppSideLoading -On [<SwitchParameter>]
                      [-Connection <PnPConnection>]
```

### Off
```powershell
Set-PnPAppSideLoading -Off [<SwitchParameter>]
                      [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPAppSideLoading -On
```

This will turn on App side loading

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPAppSideLoading -Off
```

This will turn off App side loading

## PARAMETERS

### -Off


```yaml
Type: SwitchParameter
Parameter Sets: Off

Required: True
Position: Named
Accept pipeline input: False
```

### -On


```yaml
Type: SwitchParameter
Parameter Sets: On

Required: True
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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)