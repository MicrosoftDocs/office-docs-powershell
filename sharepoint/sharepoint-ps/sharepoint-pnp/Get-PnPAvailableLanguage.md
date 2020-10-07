---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpavailablelanguage
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Get-PnPAvailableLanguage
---

# Get-PnPAvailableLanguage

## SYNOPSIS
Returns the available languages on the current web

## SYNTAX 

### 
```powershell
Get-PnPAvailableLanguage [-Includes <String[]>]
                         [-Identity <WebPipeBind>]
                         [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAvailableLanguage
```

This will return the available languages in the current web

## PARAMETERS

### -Identity
The guid of the web or web object

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)