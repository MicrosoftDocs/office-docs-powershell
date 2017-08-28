---
external help file: Microsoft.Office.Web.Apps.Administration.dll-Help.xml
Module Name: officewebapps
online version: http://technet.microsoft.com/EN-US/library/8014bdd8-bc91-42cc-bbc1-dd9fcffbd7cf(Office.15).aspx
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
{{Fill in the Description}}

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

[Online Version](http://technet.microsoft.com/EN-US/library/8014bdd8-bc91-42cc-bbc1-dd9fcffbd7cf(Office.15).aspx)

