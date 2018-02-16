---
external help file: 
applicable: Skype for Business Online
title: Get-CsStorageServiceConfiguration
schema: 2.0.0
---

# Grant-CsTeamsInteropPolicy

## SYNOPSIS
Determines how calls are routed between Skype for Business and Microsoft Teams. This cmdlet s typically used by organizations that have users on both Skype for Business and Microsoft Teams and want to configure how calls are handled in their organization.

Note: This document is provided for early evaluation of Calling Plans support for Microsoft Teams. TeamsInteropPolicy does not currently respect the policy’s chat settings and the current implementation may change in the future.

Grant-CsTeamsInteropPolicy \[\[-Identity\] \<UserIdParameter\>\] \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Grant-CsTeamsInteropPolicy [-PassThru] [-Confirm] [[-PolicyName] <Object>] [[-Identity] <Object>]
 [-Tenant <Object>] [-DomainController <Object>] [-WhatIf] [-AsJob]
```

## DESCRIPTION
Interoperability (interop for short) enables Skype for Business and Teams users to chat and call with one another, ensuring that communications remain fluid across your organization. 
This policy helps IT pros manage the adoption of Teams by determining how to route calls across apps and whether to enable users to choose which app to use for calling. 
Teams interop policy can be defined at the tenant or per-user level.

Teams interop policy can be configured to keep voice communications in Teams and Skype for Business siloed, or it can be configured to enable users to communicate across application boundaries.

For comprehensive documentation on this policy and it’s settings, see [Microsoft Teams and Skype for Business Interoperability](https://docs.microsoft.com/MicrosoftTeams/teams-and-skypeforbusiness-interoperability).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Grant-CsTeamsInteropPolicy -PolicyName DisallowOverrideCallingDefaultChatDefault -Identity user@contoso.com
```

**Default Policy**

By default, Microsoft Teams is configured to ensure that existing Skype for Business and Microsoft Teams calling workloads remain distinct and separate. 
This is a safe configuration for organizations just beginning to experiment with Teams Calling.

### -------------------------- Example 2 --------------------------
```
Grant-CsTeamsInteropPolicy -PolicyName DisallowOverrideCallingTeamsChatTeams -Identity user@contoso.com
```

**Policy to enable all inbound calls to be routed to Microsoft Teams**

Users who have calling plans and would like to receive their calls in Microsoft Teams can have their calls routed to Teams.


### -------------------------- Example 3 --------------------------
```
Grant-CsTeamsInteropPolicy -PolicyName AllowOverrideCallingDefaultChatTeams -Identity user@contoso.com
```

**Enabling users to choose what app to use to receive calls**

TeamsInteropPolicy supports the ability for IT administrators to grant end users the choice of what app to use to receive calls through *AllowEndUserClientOverride*. 
When enabled, this setting will display end-user settings in Microsoft Teams enabling the user to choose either Microsoft Teams and Skype for Business as their preferred calling client. 
When selected, the change immediately re-routes calls to the app of choice.


### -------------------------- Example 4 --------------------------
```
Grant-CsTeamsInteropPolicy -PolicyName DisallowOverrideCallingDefaultChatDefault -Identity user@contoso.com
```

**Policy for Skype for Business on-premises or Hybrid Voice (CCE or OPCH) users**

Skype for Business on-premises users and Hybrid Voice users should never have their TeamsInteropPolicy configured to receive calls exclusively in Teams. 
If they do, they will be unable to receive calls. This example is used for on-premises users.


## PARAMETERS

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

### -DomainController
{{Fill DomainController Description}}

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
{{Fill Identity Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online 

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
{{Fill PassThru Description}}

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

### -PolicyName
{{Fill PolicyName Description}}

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

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

**External Calling Support**
Calls from external callers on PSTN is only available for users who have been provisioned with a Calling Plan.

**Supported Topologies**
Interoperability between Teams and Skype for Business is supported between users who are purely online (Skype for Business Online and Teams), and users homed in a Skype for Business on-premises deployment in a mixed (Hybrid) deployment topology.

**Hybrid Voice is not supported at this time**
Interop support for Skype for Business Hybrid does not include Hybrid Voice capabilities delivered through CCE (Cloud Connector Edition) or on-premises PSTN connectivity using existing deployment--or commonly called as OPCH (On Prem Config Hybrid). 
Teams users cannot be enabled for PSTN calling capabilities using CCE or OPCH.

**IP Phone Support**
Currently, changing CallingDefaultClient to Teams will also affect calls to Skype for Business IP phones. 
Incoming calls will not be received on the phones and will only ring Teams clients. 
Please consult the [Skype for Business to Microsoft Teams Capabilities Roadmap](https://aka.ms/skype2teamsroadmap) for information about support for existing certified SIP phones.


## RELATED LINKS

[Skype for Business to Microsoft Teams Capabilities Roadmap](https://aka.ms/skype2teamsroadmap)

[Microsoft Teams and Skype for Business Interoperability](https://docs.microsoft.com/MicrosoftTeams/teams-and-skypeforbusiness-interoperability)
