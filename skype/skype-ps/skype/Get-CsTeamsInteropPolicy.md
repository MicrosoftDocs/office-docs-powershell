---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsStorageServiceConfiguration
schema: 2.0.0
---

# Get-CsTeamsInteropPolicy

## SYNOPSIS

IMPORTANT: TeamsInteropPolicy has been replaced by TeamsUpgradePolicy. Please read description for more details. You can also find more guidance here: [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).

If TeamsUpgradePolicy has mode=Legacy, TeamsInteropPolicy  determines how calls are routed between Skype for Business and Microsoft Teams. *Otherwise TeamsInteropPolicy is ignored.* Granting TeamsUpgradePolicy with mode=Legacy is now blocked. Customers with exisitng configurations using Legacy mode must update their configuration to use a mode other than Legacy.


## SYNTAX

```
Get-CsTeamsInteropPolicy  [-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION

IMPORTANT: TeamsInteropPolicy has been replaced by TeamsUpgradePolicy. TeamsInteropPolicy is only honored if TeamsUpgradePolicy mode=Legacy.  However, Legacy mode has been deprecated and TeamsInteropPolicy will be removed in the near future.  Any customer still using TeamsUpgradePolicy with mode=Legacy must update their configuration of TeamsUpgradePolicy to use a different mode.

For any user that is still assigned TeamsInteropPolicy and in Legacy mode, these users must be assigned only one of these three built-in instances for which CallingDefaultClient = ChatDefaultClient, and for which AllowEndUserClientOverride = false. The other instances are not longer valid configurations, are not supported and will be removed. 


 
For comprehensive documentation on this policy and its settings, see [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsTeamsInteropPolicy
```

List all available instances of TeamsInteropPolicy.

## PARAMETERS

### -Filter
{{Fill Filter Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The name of the policy instance

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online 

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
TeamsInteropPolicy has been replaced by TeamsUpgradePolicy. It is not honored except if TeamsUpgradePolicy mode=Legacy. Legacy mode is being deprecated so customers should update their configuration of TeamsUpgradePolicy to use modes other than Legacy. 


## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype)
