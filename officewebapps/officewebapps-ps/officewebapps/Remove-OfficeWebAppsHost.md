---
external help file:
Module Name: officewebapps
title: Remove-OfficeWebAppsHost
online version:
schema: 2.0.0
---

# Remove-OfficeWebAppsHost

## SYNOPSIS
Removes a host domain from the Allow List for an Office Online Server farm.

## SYNTAX

```
Remove-OfficeWebAppsHost -Domain <String>
```

## DESCRIPTION
The Remove-OfficeWebAppsHost cmdlet removes the specified host domain from the Allow List.
The Allow List contains the host domains to which Office Online Server allows file operations requests.

If there are no domains on the Allow List, Office Online Server allows file requests to hosts in any domain.
Do not leave this list blank if your Office Online Server farm is accessible from the Internet.
Otherwise anyone can use your Office Online Server farm to view and edit content.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
Remove-OfficeWebAppsHost -domain "contoso.com"
```

This example removes the domain contoso.com from the Allow List.

## PARAMETERS

### -Domain
Specifies the host domain to remove from the Allow List.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS