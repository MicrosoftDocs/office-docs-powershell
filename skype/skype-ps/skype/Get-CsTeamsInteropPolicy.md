---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsStorageServiceConfiguration
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Get-CsTeamsInteropPolicy

## SYNOPSIS

IMPORTANT: TeamsInteropPolicy has been replaced by TeamsUpgradePolicy. Please read description for more details. You can also find more guidance here: [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).



## SYNTAX

```
Get-CsTeamsInteropPolicy  [-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
Previously, TeamsInteropPolicy could determined how calls are routed between Skype for Business and Microsoft Teams, if TeamsUpgradePolicy had mode=Legacy. However, TeamsInteropPolicy and Legacy mode are both now fully retired. Instead, use TeamsUpgradePolicy to manage routing.

 
For comprehensive documentation on this policy and its settings, see [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsTeamsInteropPolicy
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
TeamsInteropPolicy is no longer honored by the system and has been replaced by TeamsUpgradePolicy. 


## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype)
