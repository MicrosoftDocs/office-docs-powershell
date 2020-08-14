---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/measure-pnpweb
applicable: SharePoint Online, SharePoint 2016, SharePoint 2019
schema: 2.0.0
title: Measure-PnPWeb
---

# Measure-PnPWeb

## SYNOPSIS
Returns statistics on the web object

## SYNTAX 

```powershell
Measure-PnPWeb [-Identity <WebPipeBind>]
               [-Recursive [<SwitchParameter>]]
               [-IncludeHiddenList [<SwitchParameter>]]
               [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Measure-PnPWeb
```

Gets statistics on the current web

### ------------------EXAMPLE 2------------------
```powershell
Measure-PnPWeb $web -Recursive
```

Gets statistics on the provided web including all its subwebs

## PARAMETERS

### -Identity


Only applicable to: SharePoint Online, SharePoint Server 2019, SharePoint Server 2016

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -IncludeHiddenList
Include hidden lists in statistics calculation

Only applicable to: SharePoint Online, SharePoint Server 2019, SharePoint Server 2016

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Recursive
Iterate all sub webs recursively

Only applicable to: SharePoint Online, SharePoint Server 2019, SharePoint Server 2016

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019, SharePoint Server 2016

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)