---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/find-csonlineapplicationinstance
schema: 2.0.0
title: Find-CsOnlineApplicationInstance
---

# Find-CsOnlineApplicationInstance

## SYNOPSIS
Use the Find-CsOnlineApplicationInstance cmdlet to find application instances that match your search criteria.

## SYNTAX

```
Find-CsOnlineApplicationInstance [-SearchQuery] <string> [[-MaxResults] <uint>] [-ExactMatchOnly] [-AssociatedOnly] [-UnAssociatedOnly] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Use the Find-CsOnlineApplicationInstance cmdlet to find application instances that match your search criteria.

If MaxResults is not specified, the number of returned applications instances is limited to 10 application instances.

## EXAMPLES

### Example 1
```powershell
Find-CsOnlineApplicationInstance -SearchQuery "Test"
```

This example returns up to 10 application instances whose name starts with "Test".

### Example 2
```powershell
Find-CsOnlineApplicationInstance -SearchQuery "Test" -MaxResults 5
```

This example returns up to 5 application instances whose name starts with "Test".

### Example 3
```powershell
Find-CsOnlineApplicationInstance -SearchQuery "Test Auto Attendant" -ExactMatchOnly
```

This example returns up to 10 application instances whose name is "Test Auto Attendant".

### Example 4
```powershell
Find-CsOnlineApplicationInstance -SearchQuery "Test Auto Attendant" -AssociatedOnly
```

This example returns up to 10 application instances whose name is "Test Auto Attendant", and who are associated with an application configuration, like auto attendant or call queue.

## PARAMETERS

### -AssociatedOnly

> Applicable: Microsoft Teams

The AssociatedOnly parameter instructs the cmdlet to return only application instances that are associated to a configuration.

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

### -ExactMatchOnly

> Applicable: Microsoft Teams

The ExactMatchOnly parameter instructs the cmdlet to return exact matches only. The default value is false.

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

### -Force

> Applicable: Microsoft Teams

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

### -MaxResults

> Applicable: Microsoft Teams

The MaxResults parameter identifies the maximum number of results to return. If this parameter is not provided, the default is value is 10. Max allowed value is 20.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchQuery

> Applicable: Microsoft Teams

The SearchQuery parameter defines a query for application instances by display name, telephone number, or GUID of the application instance. This parameter accepts partial queries for display names and telephone numbers. The search is not case sensitive.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnAssociatedOnly

> Applicable: Microsoft Teams

The UnAssociatedOnly parameter instructs the cmdlet to return only application instances that are not associated to any configuration.

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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information`, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.FindApplicationInstanceResult

## NOTES

## RELATED LINKS

[Get-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlineapplicationinstance)

[New-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlineapplicationinstance)

[Find-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/find-csonlineapplicationinstance)

[Set-CsOnlineApplicationInstance](https://learn.microsoft.com/powershell/module/microsoftteams/set-csonlineapplicationinstance)
