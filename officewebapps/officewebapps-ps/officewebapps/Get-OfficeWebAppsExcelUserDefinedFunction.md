---
external help file:
Module Name: officewebapps
title: Get-OfficeWebAppsExcelUserDefinedFunction
online version:
schema: 2.0.0
---

# Get-OfficeWebAppsExcelUserDefinedFunction

## SYNOPSIS
Returns a list of currently configured UDF definitions.

## SYNTAX

```
Get-OfficeWebAppsExcelUserDefinedFunction [[-Identity] <UserDefinedFunction>]
```

## DESCRIPTION
Returns a list of currently configured UDF definitions.

## EXAMPLES

### This example returns a list of currently configured UDF definitions from c:\myudf.dll.
```
Get-OfficeWebAppsExcelUserDefinedFunction -Identity c:\myudf.dll
```

## PARAMETERS

### -Identity
The path and filename of the UDF.

```yaml
Type: UserDefinedFunction
Parameter Sets: (All)
Aliases: 

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS