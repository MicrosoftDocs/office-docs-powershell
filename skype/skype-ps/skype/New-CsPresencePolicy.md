---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPresencePolicy

## SYNOPSIS

Creates a new presence policy at either the site scope or the per-user scope.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsPresencePolicy [-Identity] <XdsIdentity> [-MaxCategorySubscription <UInt16>]
 [-MaxPromptedSubscriber <UInt16>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-Description <String>]
 [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION

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
With the CsPresencePolicy cmdlets you can manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

The New-CsPresencePolicy cmdlet provides a way for you to create custom presence policies at either the site scope or the per-user scope.
Policies created at the site scope are automatically applied to that site; policies created at the per-user scope must be assigned to users by running the Grant-CsPresencePolicy cmdlet.
Note that you cannot create a new presence policy at the global scope, nor can you create a second presence policy at an individual site.
(For example, the Redmond site can host only one presence policy.)



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsPresencePolicy -Identity "RedmondPresencePolicy" -MaxPromptedSubscriber 400 -MaxCategorySubscription 500
```

The command shown in Example 1 creates a new per-user presence policy with the Identity RedmondPresencePolicy.
In this example, the value of the MaxPromptedSubscriber property is set to 400 and the value of the MaxCategorySubscription property is set to 500.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsPresencePolicy -Identity "RedmondPresencePolicy" -InMemory

$x.MaxPromptedSubscriber = 400

$x.MaxCategorySubscription = 500

Set-CsPresencePolicy -Instance $x
```

In Example 2, a new per-user presence policy is initially created in memory, and only later converted to an actual presence policy.
To do this, the first command in the example creates a presence policy with the Identity RedmondPresencePolicy and stores this policy in a variable named $x.
The InMemory parameter ensures that the policy is created in memory only, and is not immediately added to Skype for Business Server.

Commands 2 and 3 are next used to configure the MaxPromptedSubscriber and the MaxCategorySubscription properties of the virtual policy.
After the policy values have been set, line 4 uses the Set-CsPresencePolicy cmdlet and the Instance parameter to create an actual presence policy based on the information stored in $x.
This final step is crucial: if you do not call the Set-CsPresencePolicy cmdlet the policy will exist only in memory, and will disappear as soon as you end your Windows PowerShell session or delete the variable $x.


## PARAMETERS

### -Identity

Unique identifier for the new presence policy.
To create a new per-user policy, use syntax similar to this:

`-Identity "RedmondPresencePolicy"`

To create a new policy at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

Note that you cannot create a new presence policy at the global scope.
In addition, your command will fail if the site in question already hosts a presence policy, or if you try to use the Identity of a per-user policy that already exists.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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
The maximum number of promoted subscribers a user can have at any one time.
By default, any time you are added to another user's Contacts list a notification dialog appears on screen informing you of this fact, and giving you the chance to do such things as add the person to your own Contacts list or block the person from viewing your presence.
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new presence policy is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsPresencePolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsPresencePolicy cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy object.

## NOTES

## RELATED LINKS

[Get-CsPresencePolicy]()

[Grant-CsPresencePolicy]()

[Remove-CsPresencePolicy]()

[Set-CsPresencePolicy]()

