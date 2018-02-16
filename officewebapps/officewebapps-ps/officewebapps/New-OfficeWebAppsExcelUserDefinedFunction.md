---
external help file:
Module Name: officewebapps
title: New-OfficeWebAppsExcelUserDefinedFunction
online version:
schema: 2.0.0
---

# New-OfficeWebAppsExcelUserDefinedFunction

## SYNOPSIS
Creates a definition for a UDF binary.

## SYNTAX

```
New-OfficeWebAppsExcelUserDefinedFunction -Assembly <String> [-AssemblyLocation <AssemblyLocation>]
 [-Description <String>] [-Enable] [-WhatIf] [-Confirm]
```

## DESCRIPTION
Creates a definition for a UDF binary.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
New-OfficeWebAppsExcelUserDefinedFunction -Assembly c:\myudf.dll -AssemblyLocation LocalFile -Enable:$true -Description "My Server UDFs"
```

### ------------------EXAMPLE 2---------------------
```
New-OfficeWebAppsExcelUserDefinedFunction -Assembly "CompanyName.Hierarchichal.MyUdfNamespace.MyUdfClassName.dll, Version=1.1.0.0, Culture=en, PublicKeyToken=e8123117d7ba9ae38" -AssemblyLocation GAC -Enable:$true -Description "My GAC Server UDFs"
```

## PARAMETERS

### -Assembly
The name of the assembly.

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
Description of the UDF.

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