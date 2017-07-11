---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPersistentChatEndpoint

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the Persistent Chat endpoints configured for use in the organization.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Lync Server 2013 Preview Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the Persistent Chat endpoints configured for use in the organization.
A Persistent Chat endpoint is an Active Directory contact object provides a friendly URL for a Skype for Business Server 2015 Persistent Chat pool.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Get-CsPersistentChatEndpoint [[-Identity] <UserIdParameter>] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-PersistentChatPoolFqdn <Fqdn>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

When you install the Persistent Chat service, an endpoint is automatically created for each Persistent Chat pool; this endpoint is an Active Directory contact object that maintains the pool URI.
If all your users are running Microsoft Lync 2013 Preview this should be sufficient.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the New-CsPersistentChatEndpoint cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.
The Get-CsPersistentChatEndpoint cmdlet provides a way for you to return information about all the Persistent Chat endpoints configured for use in your organization.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPersistentChatEndpoint"}

Lync Server Control Panel: The functions carried out by the Get-CsPersistentChatEndpoint cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Persistent Chat service (which replaces the Group Chat service used in Microsoft Lync Server 2010) provides organizations with messaging and collaboration capabilities similar to those found in Internet discussion forums: users can exchange messages in real-time, yet can also revisit and restart those conversations at any time.
Conversations can be based around specific topics, and these conversations can be made available to everyone or to only a selected set of users.
Likewise, individual chat rooms can be configured so that anyone can post a message or configured so that only designated presenters can post messages.

When you install the Persistent Chat service, an endpoint is automatically created for each Persistent Chat pool; this endpoint is an Active Directory contact object that maintains the pool URI.
If all your users are running Skype for Business this should be sufficient.

However, if you have users running legacy clients (such as Microsoft Lync 2010 these users might find the default Persistent Chat URIs difficult to work with and difficult to use when pointing their legacy client towards the pool.
Because of this, administrators can use the New-CsPersistentChatEndpoint cmdlet to create an additional contact object for the pool, a contact object that provides a friendlier, easier-to-use URI.
The Get-CsPersistentChatEndpoint cmdlet provides a way for you to return information about all the Persistent Chat endpoints configured for use in your organization.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPersistentChatEndpoint cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the Persistent Chat endpoints configured for use in the organization.

Get-CsPersistentChatEndpoint

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the Persistent Chat endpoints configured for use in the organization.

Get-CsPersistentChatEndpoint

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 uses the Filter parameter to return information for the Persistent Chat endpoint that has the Identity "sip:pce@litwareinc.com".
In this case, the SIP address is used as the Identity.

Get-CsPersistentChatEndpoint -Identity "sip:pce@litwareinc.com"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 uses the Filter parameter to return information for the Persistent Chat endpoint that has the Identity "sip:pce@litwareinc.com".
In this case, the SIP address is used as the Identity.

Get-CsPersistentChatEndpoint -Identity "sip:pce@litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information about all the Persistent Chat endpoints configured for use on the Persistent Chat pool atl-pcpool-001.litwareinc.com.
This is done by including the PoolFqdn parameter followed by the fully qualified domain name of the Persistent Chat pool.

Get-CsPersistentChatEndpoint -PersistentChatPoolFqdn atl-pcpool-001.litwareinc.com

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information about all the Persistent Chat endpoints configured for use on the Persistent Chat pool atl-pcpool-001.litwareinc.com.
This is done by including the PoolFqdn parameter followed by the fully qualified domain name of the Persistent Chat pool.

Get-CsPersistentChatEndpoint -PersistentChatPoolFqdn atl-pcpool-001.litwareinc.com

## PARAMETERS

### -Credential
Enables you to run the Get-CsPersistentChatEndpoint cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve user information.
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN).
For example:

-DomainController "atl-dc-001.litwareinc.com"

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
**Below Content Applies To:** Lync Server 2013

Enables you to limit the returned data by filtering on Lync Server-specific attributes.
For example, you can limit returned data to Persistent Chat endpoints that have been assigned a specific voice policy, or endpoints have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only endpoints that have been assigned a per-user conferencing policy would look like this, with ConferencingPolicy representing the Active Directory attribute, -ne representing the comparison operator (not equal to), and $Null (a built-in Windows PowerShell variable) representing the filter value:

-Filter {ConferencingPolicy -ne $Null}



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on Skype for Business Server 2015-specific attributes.
For example, you can limit returned data to Persistent Chat endpoints that have been assigned a specific voice policy, or endpoints have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only endpoints that have been assigned a per-user conferencing policy would look like this, with ConferencingPolicy representing the Active Directory attribute, -ne representing the comparison operator (not equal to), and $Null (a built-in Windows PowerShell variable) representing the filter value:

-Filter {ConferencingPolicy -ne $Null}



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

### -Identity
Unique identifier for the Persistent Chat endpoint to be returned.
Endpoint Identities are typically specified using the endpoint's SIP address or display name; for example:

-Identity "sip:pcEndpoint1@litwareinc.com"

However, you can also use the full Identity of the endpoint; for example:

-Identity "CN={33e5014b-dcba-46b5-9bf7-48f4d5fca69d}, CN=Application Contacts,CN=RTC Service,CN=Services,CN=Configuration,DC=litwareinc,DC=com"

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LdapFilter
**Below Content Applies To:** Lync Server 2013

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Lync Server).
Because Persistent Chat endpoints have very few non-Lync Server attributes this parameter is of minimal value.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
Because Persistent Chat endpoints have very few non-Skype for Business Server 2015 attributes this parameter is of minimal value.



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

### -OU
Enables you to return information about user accounts in a specific organizational unit (OU) or container.
Because new Persistent Chat endpoints are all created in the same Active Directory container (ApplicationContacts/RTC Service/Services/Configuration) this parameter is of minimal value.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PersistentChatPoolFqdn
Fully qualified domain name of the Persistent Chat pool associated with the Persistent Chat endpoint.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven contacts (regardless of the number of users that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three contacts in your forest, the command will return those three contacts, and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
String value.
Get-CsPersistentChatEndpoint can accept a string value representing the Identity or the SIP address of a Persistent Chat endpoint.

###  
String value.
The Get-CsPersistentChatEndpoint cmdlet can accept a string value representing the Identity or the SIP address of a Persistent Chat endpoint.

## OUTPUTS

###  
Get-CsPersistentChatEndpoint returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

###  
The Get-CsPersistentChatEndpoint cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSPersistentChatContact class.

## NOTES

## RELATED LINKS

[New-CsPersistentChatEndpoint]()

[Remove-CsPersistentChatEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/2c37edd6-6892-4b2d-8586-6f59ab668d4b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2c37edd6-6892-4b2d-8586-6f59ab668d4b(OCS.16).aspx)

