---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Remove-CsPersistentChatPolicy
schema: 2.0.0
---

# Remove-CsPersistentChatPolicy

## SYNOPSIS
Removes an existing Persistent Chat policy.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsPersistentChatPolicy [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Skype for Business Server, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope and thus provide Persistent Chat access to some users while denying this access to other users.

Skype for Business Server Control Panel: To remove a Persistent Chat policy using the Skype for Business Server Control Panel, click Persistent Chat and then click Persistent Chat Policy.
Select the policy to be removed, click Edit and then click Delete.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsPersistentChatPolicy -Identity "RedmondPersistentChatPolicy"
```

The command shown in Example 1 removes the per-user Persistent Chat policy with the Identity RedmondPersistentChatPolicy.


### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatPolicy -Filter "site:*" | Remove-CsPersistentChatPolicy
```

In Example 2, all the Persistent Chat policies applied to the site scope are deleted.
To do this, the command first uses the `Get-CsPersistentChatPolicy` cmdlet and the Filter parameter to return all the Persistent Chat policies configured at the site scope.
(This is done by using the filter value "site:*".) These policies are then piped to and deleted by, the `Remove-CsPersistentChatPolicy` cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatPolicy | Where-Object {$_.EnablePersistentChat -eq $True} | Remove-CsPersistentChatPolicy
```

In Example 3, all the Persistent Chat policies in which Persistent Chat is enabled are deleted.
To carry out this task, the command first calls the `Get-CsPersistentChatPolicy` cmdlet without any parameters; this returns a collection of all the Persistent Chat policies configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those policies where the EnablePersistentChat property is equal to true ($True).
That collection is then piped to the `Remove-CsPersistentChatPolicy` cmdlet, which deletes each policy in the collection.


## PARAMETERS

### -Identity
Unique identity of the Persistent Chat policy to be deleted.
To remove a site-scoped policy, use syntax similar to this:

`-Identity site:Redmond`

To delete per-user policy, use syntax similar to this:

`-Identity RedmondPolicy`

The `Remove-CsPersistentChatPolicy` cmdlet can also be run against the global Persistent Chat policy.
In that case, however, the global policy will not actually be deleted.
Instead, all the properties in the global policy will be reset to their default values.


```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### -Force
If present, causes the `Remove-CsPersistentChatPolicy` cmdlet to delete the per-user policy even if the policy is currently assigned to at least one user.
If not present, you will be asked to confirm the deletion request before a policy still in use will be removed.


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
Globally unique identifier (GUID) of the Skype for Business Online tenant account for whom the Persistent Chat policy is being removed.
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
The `Remove-CsPersistentChatPolicy` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsPersistentChatPolicy` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy object.

## NOTES

## RELATED LINKS

[Get-CsPersistentChatPolicy](Get-CsPersistentChatPolicy.md)

[Grant-CsPersistentChatPolicy](Grant-CsPersistentChatPolicy.md)

[New-CsPersistentChatPolicy](New-CsPersistentChatPolicy.md)

[Set-CsPersistentChatPolicy](Set-CsPersistentChatPolicy.md)
