---
external help file:
Module Name: officewebapps
title: Repair-OfficeWebAppsFarm
online version:
schema: 2.0.0
---

# Repair-OfficeWebAppsFarm

## SYNOPSIS
Removes all servers flagged as unhealthy from an Office Online Server farm.

## SYNTAX

```
Repair-OfficeWebAppsFarm [-Force] [-WhatIf] [-Confirm]
```

## DESCRIPTION
The Repair-OfficeWebAppsFarm cmdlet removes all servers flagged as unhealthy from a Office Online Server farm.
This cmdlet updates the farm topology but does not clean up services and web applications on the servers that are removed.
For this reason, we recommend making every effort to run the Remove-OfficeWebAppsMachine cmdlet from the unhealthy servers so that they are cleanly removed from the farm.
Use the Repair-OfficeWebAppsFarm cmdlet only if the unhealthy servers have failed and you cannot run the Remove-OfficeWebAppsMachine cmdlet directly on them.

If there are multiple unhealthy servers, you are prompted before each server is removed.
If there are no unhealthy servers, this cmdlet does nothing.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
(Get-OfficeWebAppsFarm).Machines
```

This example displays the health status of all servers in the Office Online Server farm.

### ------------------EXAMPLE 2---------------------
```
Repair-OfficeWebAppsFarm
```

This example removes all unhealthy servers from the Office Online Server farm.

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