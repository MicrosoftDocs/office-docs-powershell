---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPersistentChatPolicy
schema: 2.0.0
---

# Get-CsPersistentChatPolicy

## SYNOPSIS
Returns information about the Persistent Chat policies configured for use in your organization.
Persistent Chat policies determine whether or not users are allowed access to Persistent Chat chat rooms.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsPersistentChatPolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsPersistentChatPolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Persistent Chat service provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

By default, users are not granted access to the Persistent Chat service; that access can only be granted if the user is managed by a Persistent Chat policy that allows for the user of the service.
When you install Skype for Business Server, all your users are managed by a global Persistent Chat policy in which the use of Persistent Chat is disabled.
If you want to give all your users access to the service you can simply set the EnablePersistentChat property in this global policy to True.
Alternatively, you can create additional policies at the site or at the per-user scope, and thus provide Persistent Chat access to some users while denying this access to other users.

To view Persistent Chat policy information in the Skype for Business Server Control Panel, click Persistent Chat and then click Persistent Chat Policy.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPersistentChatPolicy
```

The command shown in Example 1 returns information about all the Persistent Chat policies configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsPersistentChatPolicy -Identity "RedmondPersistentChatPolicy"
```

In Example 2, information is returned only for the per-user Persistent Chat policy with the Identity RedmondPersistentChatPolicy.

### -------------------------- Example 3 --------------------------
```
Get-CsPersistentChatPolicy -Filter "site:*"
```

In Example 3, information is returned for all the Persistent Chat policies configured at the site scope.
This is done by including the Filter parameter and the parameter value "site:*".

### -------------------------- Example 4 --------------------------
```
Get-CsPersistentChatPolicy | Where-Object {$_.EnablePersistentChat -eq $True}
```

In Example 4, information is returned only for those Persistent Chat policies in which Persistent Chat is enabled.
To do this, the Get-CsPersistentChatPolicy cmdlet is first called without any parameters in order to return a collection of all the Persistent Chat policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those policies where the EnablePersistentChat property is equal to True ($True).


## PARAMETERS

### -Filter
Enables you to do a wildcard search for Persistent Chat policies.
For example, to find all the policies configured at the site scope, use this syntax:

`-Filter "site:*"`

You cannot use both the Filter parameter and the Identity parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identity assigned to the policy when it was created.
Persistent Chat policies can be assigned at the global, site, or per-user scope.
To refer to the global instance, use this syntax:

`-Identity global`

To refer to a policy at the site scope, use this syntax:

`-Identity site:Redmond`

To refer to a policy at the per-user scope, use syntax similar to this:

`-Identity RedmondPersistentChatPolicy`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is specified the Get-CsPersistentChatPolicy cmdlet returns information about all the Persistent Chat policies configured for use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the Persistent Chat policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose Persistent Chat policies are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.PersistentChat.PersistentChatPolicy


## NOTES


## RELATED LINKS

[Grant-CsPersistentChatPolicy](Grant-CsPersistentChatPolicy.md)

[New-CsPersistentChatPolicy](New-CsPersistentChatPolicy.md)

[Remove-CsPersistentChatPolicy](Remove-CsPersistentChatPolicy.md)

[Set-CsPersistentChatPolicy](Set-CsPersistentChatPolicy.md)

