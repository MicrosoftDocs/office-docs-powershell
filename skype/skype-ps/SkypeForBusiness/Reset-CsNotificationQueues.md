---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/reset-csnotificationqueues
schema: 2.0.0
title: Reset-CsNotificationQueues
---

# Reset-CsNotificationQueues

## SYNOPSIS
The `Reset-CsNotificationQueues` cmdlet resets all presence notification queues. This cmdlet was introduced in Skype for Business Server 2015 November 2015 Cumulative Update.

## SYNTAX
```
Reset-CsNotificationQueues [[-Fqdn] <Fqdn>] [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The `Reset-CsNotificationQueues` cmdlet resets all presence notification queues. Pending notifications will not be sent.

## EXAMPLES

### Example 1
```
PS C:\> Reset-CsNotificationQueues -Fqdn FE01.contoso.com
```

This example resets the notification queues on server FE01.contoso.com.

## PARAMETERS

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Fqdn

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Specifies the fqdn of the server which you want to reset notification queues.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### -WhatIf

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
