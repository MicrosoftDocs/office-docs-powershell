---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/sync-csonlineapplicationinstance
applicable: Microsoft Teams, Skype for Business Online
title: Sync-CsOnlineApplicationInstance
schema: 2.0.0
author: xixian73
ms.author: xixian
manager:naveenv
ms.reviewer:
---

# Sync-CsOnlineApplicationInstance

## SYNOPSIS
Use the Sync-CsOnlineApplicationInstance cmdlet to sync the application instance from Azure Active Directory into Agent Provisioning Service.

## SYNTAX

```
Sync-CsOnlineApplicationInstance [-CallbackUri <String>] [-ObjectId <System.Guid>] [-ApplicationId <System.Guid>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Use the Sync-CsOnlineApplicationInstance cmdlet to sync application instances from Azure Active Directory into Agent Provisioning Service.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Sync-CsOnlineApplicationInstance -ObjectId 00000000-0000-0000-0000-000000000000
```

This example sync application instance with object id "00000000-0000-0000-0000-000000000000" into Agent Provisioning Service.

## PARAMETERS

### -CallbackUri
This parameter is reserved for internal Microsoft use.

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

### -ObjectId
The application instance ID.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ApplicationId
The application ID.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
This switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If it isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).
