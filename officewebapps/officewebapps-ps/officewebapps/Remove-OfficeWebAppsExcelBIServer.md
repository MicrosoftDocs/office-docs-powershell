---
external help file:
Module Name: officewebapps
title: Remove-OfficeWebAppsExcelBIServer
online version:
schema: 2.0.0
---

# Remove-OfficeWebAppsExcelBIServer

## SYNOPSIS
Removes an instance of Analysis Services from the Allow List of BI servers to be used with Excel Online.

## SYNTAX

```
Remove-OfficeWebAppsExcelBIServer -ServerId <String>
```

## DESCRIPTION
Removes an instance of Analysis Services from the Allow List of BI servers to be used with Excel Online.

## EXAMPLES

### This example removes the server named SSAS01 from the Allow List.
```
Remove-OfficeWebAppsExcelBIServer -ServerID "SSAS01"
```

## PARAMETERS

### -ServerId
The name of the Analysis Services server.

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