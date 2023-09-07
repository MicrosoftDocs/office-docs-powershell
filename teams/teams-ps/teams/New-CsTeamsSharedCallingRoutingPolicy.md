---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamssharedcallingroutingpolicy
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# New-CsTeamsSharedCallingRoutingPolicy

## SYNOPSIS
Use the New-CsTeamsSharedCallingRoutingPolicy cmdlet to configure a Shared Calling routing policy.

## SYNTAX

### Identity (Default)
```
New-CsTeamsSharedCallingRoutingPolicy [-Identity] <string> [-EmergencyNumbers <PSListModifier[string]>]
 [-ResourceAccount <string>] [-Description <string>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Teams shared calling routing policy configures the caller ID for normal outbound PSTN calls and emergency calls made by users enabled for Shared Calling using this policy instance.

The caller ID for normal outbound PSTN calls will be the phone number assigned to resource account specified in the policy instance. Typically this is the company main Auto Attendant phone number. Call backs will go to the Auto Attendant and the caller can use the Auto Attendant to be transferred to the Shared Calling user.

When a Shared Calling user makes an emergency call, the emergency services need to be able to make a direct call back to the user who placed the emergency call. One of the defined emergency numbers will be used as caller ID for the emergency call. It will be reserved for the next 60 minutes and any inbound call to that number will directly ring the Shared Calling user that made the emergency call. If no emergency numbers are defined, the phone number of the resource account will be used as caller ID. If not free emergency numbers are available the first number in the list will be re-used.

## EXAMPLES

### Example 1
```
$ra = Get-CsOnlineUser -Identity ra1@contoso.com
New-CsTeamsSharedCallingRoutingPolicy -Identity Seattle -ResourceAccount $ra.Identity -EmergencyNumbers @{add='+14255556677','+14255554321'}
```
The command shown in Example 1 creates a new policy called Seattle that is using the Teams resource account ra1@contoso.com
and the emergency call back numbers +14255556677 and +14255554321.

## PARAMETERS

### -Identity
Unique identifier of the Teams shared calling routing policy to be created. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The description of the new policy instance.

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

### -EmergencyNumbers
An array of emergency callback numbers.

The emergency numbers must be routable for inbound PSTN calls and for Calling Plan & Operator Connect phone numbers they must be available within the tenant.

The emeregncy numbers specified must all be of the same phone number type as the phone number assigned to the specified resource account. If the resource account has a Calling Plan service number assigned, the emeregncy numbers need to be Calling Plan subscriber numbers.

If no emergency numbers are configured, the phone number of the resource account will be used as CAller ID for the emergency call.

```yaml
Type: System.Management.Automation.PSListModifier[String]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceAccount
The Identity of the resource account. Can only be specified using the Identity or ObjectId of the resource account.

The phone number assigned to the resource account must:
- Have the same phone number type as the emergency numbers configured in the policy instance.
- Must have an emergency location assigned.
- If there is a Calling Plan service phone number assigned to the resource account you need to have Pay-As-You-Go Calling Plan license and funding for it available.

The same resource account can be used in multiple policy instances. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

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
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
In some Calling Plan markets you are not allowed to set the location on Service numbers. In this case please contact the TNS Service desk https://learn.microsoft.com/microsoftteams/phone-reference/manage-numbers/contact-tns-service-desk.

## RELATED LINKS

[Set-CsTeamsSharedCallingRoutingPolicy](Set-CsTeamsSharedCallingRoutingPolicy.md)

[Grant-CsTeamsSharedCallingRoutingPolicy](Grant-CsTeamsSharedCallingRoutingPolicy.md)

[Remove-CsTeamsSharedCallingRoutingPolicy](Remove-CsTeamsSharedCallingRoutingPolicy.md)

[Get-CsTeamsSharedCallingRoutingPolicy](Get-CsTeamsSharedCallingRoutingPolicy.md)
