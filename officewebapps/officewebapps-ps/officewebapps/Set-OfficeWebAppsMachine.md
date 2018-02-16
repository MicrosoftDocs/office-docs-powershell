---
external help file:
Module Name: officewebapps
title: Set-OfficeWebAppsMachine
online version:
schema: 2.0.0
---

# Set-OfficeWebAppsMachine

## SYNOPSIS
Changes the settings of the current server that is in an Office Online Server farm.

## SYNTAX

```
Set-OfficeWebAppsMachine [-Master <String>] [-Roles <String[]>] [-WhatIf] [-Confirm]
```

## DESCRIPTION
The Set-OfficeWebAppsMachine cmdlet changes the settings of the current server that is in an Office Online Server farm.
The settings include the roles held by the current server and the designated master server for the farm.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
(Get-OfficeWebAppsFarm).Machines
```

This example shows the roles held by each server in the Office Online Server farm.

### ------------------EXAMPLE 2---------------------
```
Set-OfficeWebAppsMachine -Roles FrontEnd
```

This example configures the current server as a Front End server.

### ------------------EXAMPLE 3---------------------
```
Set-OfficeWebAppsMachine -Roles All
```

This example configures the current server to host all roles.

## PARAMETERS

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

### -Master
Specifies the server that stores the master farm configuration files.

If you set the local server as the master, you must run Set-OfficeWebAppsMachine -Master on all of the remaining servers in the Office Online Server farm to point them to the new master.

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

### -Roles
Specifies the list of server roles to assign to the local server, separated by commas.

The role types are as follows:

All

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