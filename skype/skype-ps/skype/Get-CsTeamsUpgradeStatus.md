---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsUpgradeStatus
schema: 2.0.0
manager: 
author: salarson
ms.author: salarson
ms.reviewer: 
---

# Get-CsTeamsUpgradeStatus

## SYNOPSIS
Returns information related to the Microsoft-driven automated upgrade status from Skype for Business Online to Teams. 


## SYNTAX

### Identity (Default)
```
Get-CsTeamsUpgradeStatus [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsUpgradeStatus [-Tenant <Guid>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradeStatus is used to check the status of customers eligible for Microsoft-driven automated upgrade of Skype for Business Online to Teams. 

You can also find more guidance here: [Getting started with your Microsoft Teams upgrade](https://docs.microsoft.com/MicrosoftTeams/upgrade-start-here).

## EXAMPLES

### Example 1: The below example shows an example of TeamsUpgradeStatus with the tenant being scheduled for Microsoft-driven automated upgrade.

> [!NOTE] 
> The PowerShell results get populated at the same time upgrade notification is sent and may be null if the tenant is not yet notified. 

```
PS C:\> Get-CsTeamsUpgradeStatus

TenantId             : ca573b31-a0db-4185-951e-3af848668397
State                : ScheduledForUpgrade
OptInEligibleDate    : 2018-04-12 18:06:36Z
UpgradeScheduledDate : 2018-06-15 00:00:00Z
UserNotificationDate : 2018-07-05 00:00:00Z
UpgradeDate          : 2018-07-10 00:00:00Z
LastStateChangeDate  : 2018-06-06 22:52:21Z


```

For more information on the results from the above example please reference the table below:
	
*   State:      Tenant is scheduled to be upgraded via automated upgrade on the date returned.
*   OptInEligbleDate:      Tenant is OptInEligible since 2018-04-12 18:06:36Z. (tenant admin can upgrade users on own since 2018-04-12 18:06:36Z)
*   UpgradeScheduledDate:     Tenant's upgrade is/was scheduled to start at 2018-06-15 00:00:00Z. (When the tenant was first notified of the upgrade via the M365 Message Center)
*   UserNotificationDate:   Tenant's end users will be/were notified starting 2018-07-05 00:00:00Z via SfB Client. 
*   UpgradeDate:     Tenant will be/was upgraded by Microsoft at 2018-07-10 00:00:00Z
*   LastStateChangeDate:  Tenant's state was last changed at 2018-06-06 22:52:21Z. 

For more information on the various upgrade "States" please reference the table below: 

*   Null - Tenant isn't yet in the automated upgrade system.
*   OptInEligible - Tenant will be invited to a Microsoft driven upgrade at some point in the future.  
*   ScheduledForUpgrade - Tenant is scheduled to be upgraded via automated upgrade on the date returned. This refers to the date that the tenant was first scheduled. Admins who click the Postpone button in the Teams Admin Portal will see the UpgradeDate move out 30 days but will not see a change in the Upgrade ScheduledDate field nor the OptInEligibleDate field.
*   Upgraded - Date that Tenant will be or has been upgraded.
*   Exempt - Tenant is exempt from Microsoft driven upgrade currently.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None
## NOTES 

## RELATED LINKS

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Skype for Business Online retirement on July 31, 2021](https://support.microsoft.com/en-us/help/4511540/retirement-of-skype-for-business-online)

[Upgrade Basic guidance](https://docs.microsoft.com/en-us/MicrosoftTeams/upgrade-basic)

[Transitioning from Skype for Business to Microsoft Teams via FastTrack](https://www.microsoft.com/en-us/fasttrack/skype-for-business-transition-to-teams?rtc=1)
