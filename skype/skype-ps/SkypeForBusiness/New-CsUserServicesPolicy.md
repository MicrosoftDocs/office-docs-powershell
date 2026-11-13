---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: paulkwo-msft2
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: paulkwo
Module Name: SkypeForBusiness
ms.author: paulkwo
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/new-csuserservicespolicy
schema: 2.0.0
title: New-CsUserServicesPolicy
---

# New-CsUserServicesPolicy

> [!IMPORTANT]
> Unified Contact Store (UCS) is retired in Skype for Business Server Subscription Edition CU1 HF3. When UCS is disabled (Set-CsSettingOverride -Identity Global -DisableUcs $True), the following cmdlet is impacted:
>
> New-CsUserServicesPolicy fails if the new policy has UcsAllowed set to True. Because UcsAllowed defaults to True, you must include -UcsAllowed $False when you create a user services policy. Creating a policy with -UcsAllowed $False is still allowed.
>
> Error returned in case of -UcsAllowed $True: Unified Contact Store (UCS) is deprecated and can no longer be enabled. UcsAllowed cannot be set to True. To move existing users' contacts from the Unified Contact Store back to Skype for Business Server, run the Invoke-CsUcsRollback cmdlet.


## SYNOPSIS
Creates a new User Services policy. User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store. The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Microsoft Outlook and/or Microsoft Outlook Web Access. This cmdlet was introduced in Lync Server 2013. 

## Syntax

New-CsUserServicesPolicy 
    [-Identity] <XdsIdentity> 
    [-Confirm] 
    [-Force] 
    [-InMemory] 
    [-Tenant <Guid>] 
    [-UcsAllowed <Boolean>] 
    [-WhatIf] 
    [-EnableAwaySinceIndication <Boolean>] 
    [-MigrationDelayInDays <Int32>] 
    [<CommonParameters>] 

## Description

The unified contact store introduced in Skype for Business Server gives administrators the option of storing a user's contacts in Exchange instead of in Skype for Business Server; in turn that allows the user to access the same set of contacts in Microsoft Outlook and Outlook Web Access as well as in Skype for Business. (Alternatively, you can continue to store contacts in Skype for Business Server. In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access and one for use with Skype for Business.) 

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store. User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed. When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store. 

If this property is set to False this automatic migration will not take place. However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server. In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store. After that, you must then use the Invoke-CsUcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business. 

Skype for Business Server Control Panel: The functions carried out by the New-CsUserServicesPolicy cmdlet are not available in the Skype for Business Server Control Panel. 

## Examples

### Example 1

New-CsUserServicesPolicy -Identity "site:Redmond" -UcsAllowed $False 

The command shown in Example 1 creates a new User Services policy for the Redmond site. Users managed by this policy will not have their contacts moved to the Unified Contact Store; that's because the UcsAllowed parameter has been set to False ($False). 

## Parameters

-Confirm 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Prompts you for confirmation before executing the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

Aliases: 

cf 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-EnableAwaySinceIndication 

Applicable: Skype for Business Server 2015, Skype for Business Server 2019 

PARAMVALUE: $true | $false 

Parameter properties 

Type: 

Boolean 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-Force 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Suppresses the display of any non-fatal error message that might arise when running the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-Identity 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Unique identifier for the policy to be created. To create a policy at the site scope, use syntax similar to this: 

-Identity "site:Redmond" 

To create a policy at the service scope, use syntax similar to this: 

-Identity "UserServer:atl-cs-001.litwareinc.com" 

Note that the User Server service is the only service that can host a user services policy. 

Policies can also be created at the per-user scope. To create a per-user policy, use syntax similar to this: 

-Identity "RedmondUserServicesPolicy" 

Parameter properties 

Type: 

XdsIdentity 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

2 

Mandatory: 

True 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-InMemory 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-MigrationDelayInDays 

Applicable: Skype for Business Server 2015, Skype for Business Server 2019 

Specifies the number of days the system will wait before beginning a migration to or from the unified contact store. MigrationDelayInDays can be set to any value between 0 and 180, inclusive. The default value is 0. 

Parameter properties 

Type: 

Int32 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-Tenant 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new user services policy is being created. For example: 

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308" 

You can return the tenant ID for each of your tenants by running this command: 

Get-CsTenant | Select-Object DisplayName, TenantID 

Parameter properties 

Type: 

Guid 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-UcsAllowed 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

When set to True (the default value) users affected by the policy will automatically be migrated to the unified contact store (assuming that they have an account on Exchange and that they log on using Skype for Business). When set to False, users can be removed from the unified contact store, but only if they are "manually" removed by the Invoke-CsUcsRollback cmdlet. 

Parameter properties 

Type: 

Boolean 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-WhatIf 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Describes what would happen if you executed the command without actually executing the command. 

Parameter properties 

Type: 

SwitchParameter 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

Aliases: 

wi 

 

Parameter sets 

(All) 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

CommonParameters 

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216). 

## Inputs

None 

The New-CsUserServicesPolicy cmdlet does not accept pipelined input. 

## Outputs

Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy 

The New-CsUserServicesPolicy cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object. 

## Related Links

Get-CsUserServicesPolicy 

Grant-CsUserServicesPolicy 

Remove-CsUserServicesPolicy 

Set-CsUserServicesPolicy 

 