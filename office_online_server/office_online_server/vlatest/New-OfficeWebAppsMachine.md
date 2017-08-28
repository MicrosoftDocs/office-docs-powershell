---
external help file:
Module Name: officewebapps
online version:
schema: 2.0.0
---

# New-OfficeWebAppsMachine

## SYNOPSIS
Adds the current server to an existing Office Online Server farm.

## SYNTAX

```
New-OfficeWebAppsMachine [-Force] [-MachineToJoin] <String> [-Roles <String[]>] [-WhatIf] [-Confirm]
```

## DESCRIPTION
The New-OfficeWebAppsMachine cmdlet adds the current server to an existing Office Online Server farm and optionally sets one or more roles on the new server.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
New-OfficeWebAppsMachine -MachineToJoin server1.contoso.com
```

This example adds the current server to the Office Online Server farm that is running on the server named server1.contoso.com.

## PARAMETERS

### -MachineToJoin
Specifies the name of any server that is already a member of the Office Online Server farm.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
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

### -Force
Assumes the answer to any user prompt is Yes.

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

### -Roles
Specifies one or more server roles, separated by commas, to assign to the new server.
If no roles are specified, then the server is assigned all roles.

The role types are as follows:

FrontEnd

WordBackEnd

ExcelBackEnd

PowerPointBackEnd

As a best practice, we recommend that all servers in an Office Online Server farm run all roles.
Assigning roles is not useful until the Office Online Server farm contains approximately 50 servers.

```yaml
Type: String[]
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