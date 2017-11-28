---
external help file:
Module Name: officewebapps
title: Set-OfficeWebAppsExcelUserDefinedFunction
online version:
schema: 2.0.0
---

# Set-OfficeWebAppsExcelUserDefinedFunction

## SYNOPSIS
Sets properties on existing UDF definitions.

## SYNTAX

```
Set-OfficeWebAppsExcelUserDefinedFunction [-Identity] <UserDefinedFunction> [-Assembly <String>]
 [-AssemblyLocation <AssemblyLocation>] [-Description <String>] [-Enable] [-WhatIf] [-Confirm]
```

## DESCRIPTION
Sets properties on existing UDF definitions.

## EXAMPLES

### This example disables the UDF at c:\myudf.dll.
```
Set-OfficeWebAppsExcelUserDefinedFunction -Identity c:\myudf.dll -Enable:$false
```

## PARAMETERS

### -Identity
The path and filename of the UDF.

```yaml
Type: UserDefinedFunction
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Assembly
The name of the assembly.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssemblyLocation
The location of the assembly.
Values: LocalFile - a local directory; GAC - the Global Assembly Cache.

```yaml
Type: AssemblyLocation
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of the assembly.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
Enables the UDF.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS