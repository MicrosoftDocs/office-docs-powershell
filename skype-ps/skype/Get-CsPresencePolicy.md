---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPresencePolicy

## SYNOPSIS
Returns information about the presence policies configured for use in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsPresencePolicy [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Filter
```
Get-CsPresencePolicy [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

###  (Default)
```
Get-CsPresencePolicy [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-AsJob] [<CommonParameters>]
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
With the CsPresencePolicy cmdlets you can now manage these presence subscriptions at the global scope, the site scope, or the per-user scope.
This enables you to control bandwidth use while, at the same time, ensuring that users have access to the presence information they need to do their jobs.

The Get-CsPresencePolicy cmdlet provides a way for you to return information about all the presence policies configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPresencePolicy
```

The command shown in Example 1 returns information about all the presence policies configured for use in the organization.
This is done by calling the Get-CsPresencePolicy cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsPresencePolicy -Identity "RedmondPresencePolicy"
```

Example 2 returns a single per-user presence policy: the policy with the Identity RedmondPresencePolicy.

### -------------------------- Example 3 --------------------------
```
Get-CsPresencePolicy -Filter "site:*"
```

Example 3 returns information about all the presence policies that have been configured at the site scope.
To do this, the command uses the Filter parameter and the filter value "site:*"; that filter value limits returned data to all the presence policies that have an Identity that begins with the string value "site:".

### -------------------------- Example 4 --------------------------
```
Get-CsPresencePolicy | Where-Object {$_.MaxPromptedSubscriber -le 100}
```

In Example 4, information is returned for all the presence policies that limit the maximum number of prompted subscribers to 100 or less.
To carry out this task, the command first calls the Get-CsPresencePolicy cmdlet without any parameters in order to return a collection of all the presence policies configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those policies where the MaxPromptedSubscriber property is less than or equal to 100.


## PARAMETERS

### -Identity
Unique identifier of the presence policy to be retrieved.
To return the global policy, use this syntax:

`-Identity global`

To return a policy configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To return a policy configured at the per-user scope, use syntax like this:

`-Identity "RedmondPresencePolicy"`

You cannot use wildcard characters when specifying the Identity.

If neither the Identity nor the Filter parameters are specified, then the Get-CsPresencePolicy cmdlet returns all the presence policies configured for use in the organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the policy (or policies) to be returned.
For example, this syntax returns all the presence policies configured at the site scope:

`-Filter "site:*"`

The Filter and Identity parameters cannot be used in the same command.

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the presence policy data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose presence policies are being returned.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your Skype for Business Online tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
Parameter Sets: Identity, Filter
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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Presence.PresencePolicy


## NOTES


## RELATED LINKS

[Grant-CsPresencePolicy]()

[New-CsPresencePolicy]()

[Remove-CsPresencePolicy]()

[Set-CsPresencePolicy]()