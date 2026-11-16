---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: paulkwo-msft2
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: paulkwo
Module Name: SkypeForBusiness
ms.author: paulkwo
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-csuserservicespolicy
schema: 2.0.0
title: Set-CsUserServicesPolicy
---

# Set-CsUserServicesPolicy


> [!IMPORTANT]
> Unified Contact Store (UCS) is retired in Skype for Business Server Subscription Edition CU1 HF3. When UCS is disabled (Set-CsSettingOverride -Identity Global -DisableUcs $True), the following cmdlet is impacted:
>
> Set-CsUserServicesPolicy fails if the policy has UcsAllowed set to True after the change. This includes modifying other properties of a policy that already has UcsAllowed set to True without also including -UcsAllowed $False. Creating a policy with -UcsAllowed $False is still allowed.
>
> Error returned in case of -UcsAllowed $True: Unified Contact Store (UCS) is deprecated and can no longer be enabled. UcsAllowed cannot be set to True. To move existing users' contacts from the Unified Contact Store back to Skype for Business Server, run the Invoke-CsUcsRollback cmdlet.


## SYNOPSIS
Modifies an existing User Services policy. User Services policies determine whether or not a user's contacts are stored in Skype for Business Server or in the Unified Contact Store. The Unified Contact Store provides a way for users to maintain a single set of contacts that can be accessed using Skype for Business, Outlook, and/or Outlook Web Access. This cmdlet was introduced in Lync Server 2013. 

Syntax 

Identity (Default) 

Set-CsUserServicesPolicy 
    [-Tenant <Guid>] 
    [-UcsAllowed <Boolean>] 
    [-MigrationDelayInDays <Int32>] 
    [-EnableAwaySinceIndication <Boolean>] 
    [[-Identity] <XdsIdentity>] 
    [-Force] 
    [-WhatIf] 
    [-Confirm] 
    [<CommonParameters>] 

Instance 

Set-CsUserServicesPolicy 
    [-Tenant <Guid>] 
    [-UcsAllowed <Boolean>] 
    [-MigrationDelayInDays <Int32>] 
    [-EnableAwaySinceIndication <Boolean>] 
    [-Instance <PSObject>] 
    [-Force] 
    [-WhatIf] 
    [-Confirm] 
    [<CommonParameters>] 

Description 

Skype for Business Server; in turn that allows the user to access the same set of contacts in Outlook and Outlook Web Access as well as. (Alternatively, you can continue to store contacts in Skype for Business Server. In that case, users will have to maintain two separate sets of contacts: one for use with Outlook and Outlook Web Access and one for use with Skype for Business.) 

In order to take advantage of the unified contact store you must (among other things) assign the user a user services policy that enables the use of the unified contact store. User service policies (which can be configured at the global, site, or the per-user scope) contain only a single property: UcsAllowed. When this property is set to True then (assuming all the other prerequisites have been met) the next time a user logs on to Skype for Business Server his or her contacts will automatically be migrated to the unified contact store. 

If this property is set to False this automatic migration will not take place. However, simply setting UcsAllowed will not cause a user's contacts to be moved from the unified contact store back to Skype for Business Server. In order to do that, you must first assign the user a user services policy that does not allow the use of the unified contact store. After that, you must then use the Invoke-CsUcsRollback cmdlet to "manually" migrate the contacts from the unified contact store back to Skype for Business Server. 

Skype for Business Server Control Panel: The functions carried out by the Set-CsUserServicesPolicy cmdlet are not available in the Skype for Business Server Control Panel. 

The following parameters are not applicable to Skype for Business Online: Force, Identity, Instance, MigrationDelayInDays, PipelineVariable, and Tenant 

Examples 

Example 1 

Set-CsUserServicesPolicy -Identity "RedmondUserServicesPolicy" -UcsAllowed $False 

The command shown in Example 1 disables the use of the Unified Contact Store for the per-user User Services policy RedmondUserServicesPolicy. This means that users managed by this policy will not have their contacts stored in the Unified Contact Store. 

Example 2 

Get-CsUserServicesPolicy -Filter "site:*" | Set-CsUserServicesPolicy -UcsAllowed $False 

In Example 2, all the User Services policies configured at the site scope are modified to disable the use of the Unified Contact Store. To do this, the command first calls the Get-CsUserServicesPolicy cmdlet and the Filter parameter to return a collection of all the policies configured at the site scope. This collection is then piped to the Set-CsUserServicesPolicy cmdlet, which takes each policy in the collection and sets the UcsAllowed property to False ($False). 

Parameters 

-Confirm 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Prompts you for confirmation before executing the command. Suppresses the display of any non-fatal error message that might arise when running the command. 

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

Unique identifier for the policy to be modified. To modify the global policy, use this syntax: 

-Identity "global" 

To modify a policy configured at the site scope, use syntax similar to this: 

-Identity "site:Redmond" 

To modify a policy configured at the service scope, use syntax similar to this: 

-Identity "UserServer:atl-cs-001.litwareinc.com" 

Note that the UserServer service is the only service that can host a user services policy. 

If this parameter is not included then the Set-CsUserServicesPolicy cmdlet will automatically modify the global policy. 

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

Identity 

Position: 

2 

Mandatory: 

False 

Value from pipeline: 

False 

Value from pipeline by property name: 

False 

Value from remaining arguments: 

False 

 

-Instance 

Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019 

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values. 

Parameter properties 

Type: 

PSObject 

Default value: 

None 

Supports wildcards: 

False 

DontShow: 

False 

 

Parameter sets 

Instance 

Position: 

Named 

Mandatory: 

False 

Value from pipeline: 

True 

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

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the user services policy being modified. For example: 

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

Inputs 

Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy 

The Set-CsUserServicesPolicy cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object. 

Outputs 

None 

Instead, the Set-CsUserServicesPolicy cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.UserServices.UserServicesPolicy object. 

Related Links 

Get-CsUserServicesPolicy 

Grant-CsUserServicesPolicy 

New-CsUserServicesPolicy 

Remove-CsUserServicesPolicy 

 