---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsPresencePolicy

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies an existing presence policy.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies an existing presence policy.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsPresencePolicy [[-Identity] <XdsIdentity>] [-MaxCategorySubscription <UInt16>]
 [-MaxPromptedSubscriber <UInt16>] [-Force] [-WhatIf] [-Confirm] [-Description <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

### Instance
```
Set-CsPresencePolicy [-Instance <PSObject>] [-MaxCategorySubscription <UInt16>]
 [-MaxPromptedSubscriber <UInt16>] [-Force] [-WhatIf] [-Confirm] [-Description <String>] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Microsoft Lync 2010 Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Microsoft Lync Server 2010, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

The Set-CsPresencePolicy cmdlet enables you to modify any of the presence policies configured for use in your organization.
Modifying a presence policy simply means changing the value of the MaxPromptedSubscriber property and/or the MaxCategorySubscription property.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPresencePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPresencePolicy"}

**Below Content Applies To:** Lync Server 2013

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Lync Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Lync Server, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

The Set-CsPresencePolicy cmdlet enables you to modify any of the presence policies configured for use in your organization.
Modifying a presence policy simply means changing the value of the MaxPromptedSubscriber property and/or the MaxCategorySubscription property.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsPresencePolicy cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsPresencePolicy"}

**Below Content Applies To:** Skype for Business Server 2015

Presence information (which, among other things, lets you know whether a contact is available to take part in an instant messaging conversation) is invaluable.
At the same time, however, there is a cost associated with presence information: the more presence subscriptions you have the more network bandwidth must be devoted to updating presence information.
If network bandwidth is a concern, you might want to limit the number of presence subscriptions any one user can have.

The CsPresencePolicy cmdlets enable you to manage two important aspects of presence subscriptions: prompted subscribers and category subscriptions.
When you are added to another person's Skype for Business Contacts list, the default behavior is for you to receive a pop-up notification informing you that you have been added to that list.
Until you dismiss the pop-up, each notification counts as a prompted subscriber.
The presence policy's MaxPromptedSubscriber property enables you to specify the maximum number of unresolved notification dialogs a user can have.
(If a user reaches the maximum amount then he or she will not receive new contact notifications, at least not until some of those dialogs have been resolved.)

Category subscriptions represent a request for a specific category of information; for example, an application that requests calendar data.
The MaxCategorySubscription property enables administrators to place a limit on the number of category subscriptions a user can have.

Prior to the release of Lync Server, prompted subscriber and category subscriptions were managed on a global basis.
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

The Set-CsPresencePolicy cmdlet enables you to modify any of the presence policies configured for use in your organization.
Modifying a presence policy simply means changing the value of the MaxPromptedSubscriber property and/or the MaxCategorySubscription property.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsPresencePolicy -Identity "RedmondPresencePolicy" -MaxPromptedSubscriber 300
```

The command shown in Example 1 modifies the per-user presence policy RedmondPresencePolicy.
In this example, the value of the MaxPromptedSubscriber property is set to 300.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 modifies the per-user presence policy RedmondPresencePolicy.
In this example, the value of the MaxPromptedSubscriber property is set to 300.

Set-CsPresencePolicy -Identity "RedmondPresencePolicy" -MaxPromptedSubscriber 300

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 modifies the per-user presence policy RedmondPresencePolicy.
In this example, the value of the MaxPromptedSubscriber property is set to 300.

Set-CsPresencePolicy -Identity "RedmondPresencePolicy" -MaxPromptedSubscriber 300

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsPresencePolicy | Set-CsPresencePolicy -MaxPromptedSubscriber 300
```

The command shown in Example 2 is a variation of the command uses in Example 1; in this case, however, the MaxPromptedSubscriber property is set to 300 for all the presence policies configured for use in the organization.
To do this, the command first calls Get-CsPresencePolicy without any parameters; this returns a collection of all the presence policies configured for use in the organization.
This collection is then piped to Set-CsPresencePolicy, which changes the value of the MaxPromptedSubscriber for each policy in the collection to 300.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command uses in Example 1; in this case, however, the MaxPromptedSubscriber property is set to 300 for all the presence policies configured for use in the organization.
To do this, the command first calls Get-CsPresencePolicy without any parameters; this returns a collection of all the presence policies configured for use in the organization.
This collection is then piped to Set-CsPresencePolicy, which changes the value of the MaxPromptedSubscriber for each policy in the collection to 300.

Get-CsPresencePolicy | Set-CsPresencePolicy -MaxPromptedSubscriber 300

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command uses in Example 1; in this case, however, the MaxPromptedSubscriber property is set to 300 for all the presence policies configured for use in the organization.
To do this, the command first calls the Get-CsPresencePolicy cmdlet without any parameters; this returns a collection of all the presence policies configured for use in the organization.
This collection is then piped to the Set-CsPresencePolicy cmdlet, which changes the value of the MaxPromptedSubscriber for each policy in the collection to 300.

Get-CsPresencePolicy | Set-CsPresencePolicy -MaxPromptedSubscriber 300

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsPresencePolicy | Where-Object {$_.MaxPromptedSubscriber -gt 300} | Set-CsPresencePolicy -MaxPromptedSubscriber 300
```

Example 3 shows how you can configure the presence policies in your organization to ensure that no policy allows more than 300 prompted subscribers.
To carry out this task, the command first calls Get-CsPresencePolicy without any parameters in order to return a collection of all the presence policies in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the value of the MaxPromptedSubscriber policy is greater than 300.
The filtered collection is then piped to Set-CsPresencePolicy, which takes each policy in the collection and sets the maximum number of prompted subscribers to 300.
As a result, no policy will allow more than 300 prompted subscribers, although some policies might allow fewer than 300 subscribers.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can configure the presence policies in your organization to ensure that no policy allows more than 300 prompted subscribers.
To carry out this task, the command first calls Get-CsPresencePolicy without any parameters in order to return a collection of all the presence policies in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the value of the MaxPromptedSubscriber policy is greater than 300.
The filtered collection is then piped to Set-CsPresencePolicy, which takes each policy in the collection and sets the maximum number of prompted subscribers to 300.
As a result, no policy will allow more than 300 prompted subscribers, although some policies might allow fewer than 300 subscribers.

Get-CsPresencePolicy | Where-Object {$_.MaxPromptedSubscriber -gt 300} | Set-CsPresencePolicy -MaxPromptedSubscriber 300

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can configure the presence policies in your organization to ensure that no policy allows more than 300 prompted subscribers.
To carry out this task, the command first calls the Get-CsPresencePolicy cmdlet without any parameters in order to return a collection of all the presence policies in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the value of the MaxPromptedSubscriber policy is greater than 300.
The filtered collection is then piped to the Set-CsPresencePolicy cmdlet, which takes each policy in the collection and sets the maximum number of prompted subscribers to 300.
As a result, no policy will allow more than 300 prompted subscribers, although some policies might allow fewer than 300 subscribers.

Get-CsPresencePolicy | Where-Object {$_.MaxPromptedSubscriber -gt 300} | Set-CsPresencePolicy -MaxPromptedSubscriber 300

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier of the presence policy to be modified.
To modify the global policy, use this syntax: -Identity global.
To modify a policy at the site scope, use syntax similar to this: -Identity "site:Redmond".
To modify a per-user policy, use syntax like this: -Identity "RedmondPresencePolicy".



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier of the presence policy to be modified.
To modify the global policy, use this syntax:

-Identity global

To modify a policy at the site scope, use syntax similar to this:

-Identity "site:Redmond"

To modify a per-user policy, use syntax like this:

-Identity "RedmondPresencePolicy"



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MaxCategorySubscription
The maximum number of category subscriptions allowed at any one time.
A category subscription represents a request for a specific category of information; for example, an application that requests calendar data.

MaxCategorySubscription can be set to any integer value between 0 and 3000; the default value is 1000.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxPromptedSubscriber
**Below Content Applies To:** Lync Server 2010

The maximum number of prompted subscribers a user can have at any one time.
By default, any time you are added to another user's Contacts list a notification dialog appears on screen informing you of this fact, and giving you the chance to do such things as add the person to your own Contacts list or block the person from viewing your presence.
Until you take action and dismiss the dialog box, each notification counts as a prompted subscriber.

MaxPromptedSubscriber can be set to any integer value between 0 and 600, inclusive; the default value is 200.
If you set this value to 0, users will not receive any notifications when they are added to another user's Contacts list.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

The maximum number of prompted subscribers a user can have at any one time.
By default, any time you are added to another user's Contacts list a notification dialog is displayed informing you of this fact, and giving you the chance to do such things as add the person to your own Contacts list or block the person from viewing your presence.
Until you take action and dismiss the dialog box, each notification counts as a prompted subscriber.

MaxPromptedSubscriber can be set to any integer value between 0 and 600, inclusive; the default value is 200.
If you set this value to 0, users will not receive any notifications when they are added to another user's Contacts list.



```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
**Below Content Applies To:** Lync Server 2010

{{Fill Description Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables administrators to provide additional text to accompany a presence policy.
For example, the Description might include information about the users the policy should be assigned to.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the presence policy is being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy object.
Set-CsPresencePolicy accepts pipelined input of the presence policy object.

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy object.
The Set-CsPresencePolicy cmdlet accepts pipelined input of the presence policy object.

## OUTPUTS

###  
Set-CsPresencePolicy does not return any values or objects.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy object.

###  
The Set-CsPresencePolicy cmdlet does not return any values or objects.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/2d1f157b-d35d-402b-904d-281c013d2c30(OCS.14).aspx)

[Get-CsPresencePolicy]()

[Grant-CsPresencePolicy]()

[New-CsPresencePolicy]()

[Remove-CsPresencePolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/2d1f157b-d35d-402b-904d-281c013d2c30(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2d1f157b-d35d-402b-904d-281c013d2c30(OCS.16).aspx)

