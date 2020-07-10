---
external help file:
Module Name: officewebapps
title: Remove-OfficeWebAppsExcelUserDefinedFunction
online version:
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Remove-OfficeWebAppsExcelUserDefinedFunction

## SYNOPSIS
Removes an existing UDF definition.

## SYNTAX

```
Remove-OfficeWebAppsExcelUserDefinedFunction [-Identity] <UserDefinedFunction> [-WhatIf] [-Confirm]
```

## DESCRIPTION
Removes an existing UDF definition.

## EXAMPLES

### This example removes the UDF c:\myudf.dll.
```
Remove-OfficeWebAppsExcelUserDefinedFunction -Identity c:\myudf.dll
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
