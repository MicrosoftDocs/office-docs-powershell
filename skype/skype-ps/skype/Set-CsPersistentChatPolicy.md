---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Set-CsPersistentChatPolicy
schema: 2.0.0
---

# Set-CsPersistentChatPolicy

## SYNOPSIS
Modifies an existing Persistent Chat policy.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsPersistentChatPolicy [[-Identity] <XdsIdentity>] [-Confirm] [-Description <String>]
 [-EnablePersistentChat <Boolean>] [-Force] [-WhatIf] [-Tenant <Guid>] [<CommonParameters>]
```

### Instance
```
Set-CsPersistentChatPolicy [-Confirm] [-Description <String>] [-EnablePersistentChat <Boolean>] [-Force]
 [-Instance <PSObject>] [-WhatIf] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Skype for Business Server, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope, and thus provide Persistent Chat access to some users while denying this access to other users.

Skype for Business Server Control Panel: To modify an existing Persistent Chat policy using the Skype for Business Server Control Panel, click Persistent Chat, click Persistent Chat Policy, then double-click the policy to be modified.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatPolicy | Set-CsPersistentChatPolicy -EnablePersistentChat $True
```

In Example 2, Persistent Chat is enabled for all the Persistent Chat policies in the organization.
To do this, the command first uses the `Get-CsPersistentChatPolicy` cmdlet without any parameters in order to return a collection of all the Persistent Chat policies.
This collection is then piped to the `Set-CsPersistentChatPolicy` cmdlet, which sets the EnablePersistentChat parameter for each policy in the collection to True ($True).


## PARAMETERS

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
When set to True users affected by the policy will be allowed to use Persistent Chat.
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

### -Identity
Unique identity of the Persistent Chat policy to be modified.
To modify the global policy, use this syntax:

`-Identity global`

To modify a site-scoped policy, use this syntax:

`-Identity site:Redmond`

To modify a per-user policy, use syntax similar to this:

`-Identity RedmondPolicy`

If you do not include the Identity parameter the `Set-CsPersistentChatPolicy` cmdlet will automatically modify the global policy.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the Persistent Chat policy is being modified.
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The `Set-CsPersistentChatPolicy` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

## OUTPUTS

###  
None.
Instead, the `Set-CsPersistentChatPolicy` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatPolicy]()

[Grant-CsPersistentChatPolicy]()

[New-CsPersistentChatPolicy]()

[Remove-CsPersistentChatPolicy]()
