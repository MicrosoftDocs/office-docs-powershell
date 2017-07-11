---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPersistentChatPolicy

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new Persistent Chat policy at the site or the per-user scope.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Creates a new Persistent Chat policy at the site or the per-user scope.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsPersistentChatPolicy [-Identity] <XdsIdentity> [-Confirm] [-Description <String>]
 [-EnablePersistentChat <Boolean>] [-Force] [-InMemory] [-WhatIf] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Lync 2013 Preview, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope, and thus provide Persistent Chat access to some users while denying this access to other users.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsPersistentChatPolicy"}

Lync Server Control Panel: To create a new Persistent Chat policy using the Lync Server Control Panel, click Persistent Chat, click Persistent Chat Policy, click New, and then click either Site policy or User policy.

Below Content Applies To: Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Skype for Business Server 2015, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope, and thus provide Persistent Chat access to some users while denying this access to other users.

Skype for Business Server Control Panel: To create a new Persistent Chat policy using the Skype for Business Server Control Panel, click Persistent Chat, click Persistent Chat Policy, click New, and then click either Site policy or User policy.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new per-user Persistent Chat policy with the Identity RedmondPersistentChatPolicy.
In this example, Persistent Chat is enabled by using the parameter EnablePersistentChat and the parameter value $True.

New-CsPersistentChatPolicy -Identity "RedmondPersistentChatPolicy" -EnablePersistentChat $True

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new per-user Persistent Chat policy with the Identity RedmondPersistentChatPolicy.
In this example, Persistent Chat is enabled by using the parameter EnablePersistentChat and the parameter value $True.

New-CsPersistentChatPolicy -Identity "RedmondPersistentChatPolicy" -EnablePersistentChat $True

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1; the only difference is that the new policy is applied to the site scope instead of the per-user scope.
That's done by setting the Identity to the string value "site:" followed by the name of the site itself; in this case, site:Redmond.

New-CsPersistentChatPolicy -Identity "site:Redmond" -EnablePersistentChat $True

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1; the only difference is that the new policy is applied to the site scope instead of the per-user scope.
That's done by setting the Identity to the string value "site:" followed by the name of the site itself; in this case, site:Redmond.

New-CsPersistentChatPolicy -Identity "site:Redmond" -EnablePersistentChat $True

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2013

Unique identifier to be assigned to the policy.
New Persistent Chat policies can be created at the site scope or the per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site:

-Identity site:Redmond

To create a new per-user policy, use an Identity similar to this:

-Identity SalesPersistentChatPolicy

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsPersistentChatPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use Set-CsPersistentChatPolicy.



Below Content Applies To: Skype for Business Server 2015

Unique identifier to be assigned to the policy.
New Persistent Chat policies can be created at the site scope or the per-user scope.
To create a new site policy, use the prefix "site:" and the name of the site as your Identity.
For example, use this syntax to create a new policy for the Redmond site:

-Identity site:Redmond

To create a new per-user policy, use an Identity similar to this:

-Identity SalesPersistentChatPolicy

Note that you cannot create a new global policy; if you want to make changes to the global policy, use the Set-CsPersistentChatPolicy cmdlet instead.
Likewise, you cannot create a new site or per-user policy if a policy with that Identity already exists.
If you need to make changes to an existing policy, use the Set-CsPersistentChatPolicy cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany the policy.
For example, the Description might include information about the users the policy should be assigned to.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePersistentChat
When set to True, users affected by the policy will be allowed to use Persistent Chat.
When set to False (the default value) users affected by the policy will not be allowed to use Persistent Chat.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the new Persistent Chat policy is being created.
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
None.
New-CsPersistentChatPolicy does not accept pipelined input.

###  
None.
The New-CsPersistentChatPolicy cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPersistentChatPolicy creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

###  
The New-CsPersistentChatPolicy cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatPolicy]()

[Grant-CsPersistentChatPolicy]()

[Remove-CsPersistentChatPolicy]()

[Set-CsPersistentChatPolicy]()

[Online Version](http://technet.microsoft.com/EN-US/library/f7d42a24-598a-4ea3-8a0f-25575b5235ea(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f7d42a24-598a-4ea3-8a0f-25575b5235ea(OCS.16).aspx)

