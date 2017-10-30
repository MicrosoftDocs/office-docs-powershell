---
external help file:
Module Name: officewebapps
online version:
schema: 2.0.0
---

# Remove-OfficeWebAppsMachine

## SYNOPSIS
Removes the current server from the Office Online Server farm.

## SYNTAX

```
Remove-OfficeWebAppsMachine [-WhatIf] [-Confirm]
```

## DESCRIPTION
The Remove-OfficeWebAppsMachine cmdlet removes the current server from the Office Online Server farm.
As part of this process, the cmdlet removes the web applications and shuts down the services that are related to Office Online Server.
If you cannot run the Remove-OfficeWebAppsMachine cmdlet from the server that you want to remove, use the Repair-OfficeWebAppsFarm cmdlet from any other server in the Office Online farm.

If the local server is designated as the master server in the Office Online Server farm, you cannot remove it from the farm until you assign a different server as master by using the Set-OfficeWebAppsMachine cmdlet, or until you remove all other servers from the farm.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
Remove-OfficeWebAppsMachine
```

This example removes the current server from the Office Online Server farm.

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