---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsStorageServiceConfiguration
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Remove-CsTeamsInteropPolicy

## SYNOPSIS

IMPORTANT: TeamsInteropPolicy has been  replaced by TeamsUpgradePolicy. See description for details. You can also find more guidance here: [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).


## SYNTAX

```
Remove-CsTeamsInteropPolicy [-Identity <Object>] [-WhatIf] [-Confirm] [-Tenant <Object>] [-Force] [-AsJob]
```

## DESCRIPTION

This cmdlet previously allowed administrators to remove custom created instances of TeamsInteropPolicy. In the past, TeamsInteropPolicy  determined how chats and calls are routed between Skype for Business and Microsoft Teams, when TeamsUpgradePolicy had mode=Legacy. However, both TeamsInteropPolicy and Legacy mode have been retired. TeamsInteropPolicy is no longer honored.

For more details, see [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Remove-CsTeamsInteropPolicy -identity MyCustomInteropPolicy 
```

Removes the customer policy instance named MyCustomInteropPolicy.

## PARAMETERS

### -Identity
The name of the policy instance to be removed.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

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

### -Force
{{Fill Force Description}}

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### Microsoft.Rtc.Management.Xds.XdsIdentity

## OUTPUTS

### System.Object

## NOTES

This policy has been deprecated and removed from the system. Customters should use TeamsUpgradePolicy to control interop and routing.

## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype)
