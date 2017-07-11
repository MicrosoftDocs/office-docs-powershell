---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrustedApplicationEndpoint

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves information about one or more trusted application endpoints.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Retrieves information about one or more trusted application endpoints.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsTrustedApplicationEndpoint [[-Identity] <UserIdParameter>] [-Filter <String>] [-ApplicationId <String>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>]
 [-TrustedApplicationPoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet retrieves one or more existing endpoint contact objects in Active Directory Domain Services (AD DS).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsTrustedApplicationEndpoint cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrustedApplicationEndpoint"}

Below Content Applies To: Skype for Business Server 2015

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet retrieves one or more existing endpoint contact objects in Active Directory Domain Services.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint
```

This example retrieves information about all trusted application endpoints defined within the Lync Server 2010 deployment.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example retrieves information about all trusted application endpoints defined within the Lync Server deployment.

Get-CsTrustedApplicationEndpoint

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves information about all trusted application endpoints defined within the Skype for Business Server 2015 deployment.

Get-CsTrustedApplicationEndpoint

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com"
```

Example 2 retrieves information about the application endpoint contact with the SIP address endpoint1@litwareinc.com.
Note that the sip: prefix is required when using a SIP address as the Identity.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 retrieves information about the application endpoint contact with the SIP address endpoint1@litwareinc.com.
Note that the sip: prefix is required when using a SIP address as the Identity.

Get-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 retrieves information about the application endpoint contact with the SIP address endpoint1@litwareinc.com.
Note that the sip: prefix is required when using a SIP address as the Identity.

Get-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com"

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint -Filter {DisplayName -like "*endpoint*"}
```

Example 3 retrieves all trusted application endpoints that have the string "endpoint" anywhere within their display name.
To do this, the command uses the Filter parameter.
The value of the parameter filters to find endpoint objects that have a display name (DisplayName) that contains (-like) the string endpoint (*endpoint* - the wildcard characters indicate that any characters can come before or after the string endpoint, meaning endpoint can be anywhere within the display name).

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 retrieves all trusted application endpoints that have the string "endpoint" anywhere within their display name.
To do this, the command uses the Filter parameter.
The value of the parameter filters to find endpoint objects that have a display name (DisplayName) that contains (-like) the string endpoint (*endpoint* - the wildcard characters indicate that any characters can come before or after the string endpoint, meaning endpoint can be anywhere within the display name).

Get-CsTrustedApplicationEndpoint -Filter {DisplayName -like "*endpoint*"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 retrieves all trusted application endpoints that have the string "endpoint" anywhere within their display name.
To do this, the command uses the Filter parameter.
The value of the parameter filters to find endpoint objects that have a display name (DisplayName) that contains (-like) the string endpoint (*endpoint* - the wildcard characters indicate that any characters can come before or after the string endpoint, meaning endpoint can be anywhere within the display name).

Get-CsTrustedApplicationEndpoint -Filter {DisplayName -like "*endpoint*"}

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Select-Object SipAddress, DisplayName, OwnerUrn
```

Example 4 will return all trusted application endpoints associated with the application tapp2.
This is accomplished by passing the ID tapp2 to the ApplicationId parameter.
Notice that we didn't supply a pool FQDN; this means that if an application with the ID tapp2 exists on more than one pool, endpoints for all those applications will be retrieved.
The next part of this command pipes the returned object or objects to the Select-Object cmdlet, which displays only the SipAddress, DisplayName, and OwnerUrn properties of those objects.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 will return all trusted application endpoints associated with the application tapp2.
This is accomplished by passing the ID tapp2 to the ApplicationId parameter.
Notice that we didn't supply a pool FQDN; this means that if an application with the ID tapp2 exists on more than one pool, endpoints for all those applications will be retrieved.
The next part of this command pipes the returned object or objects to the Select-Object cmdlet, which displays only the SipAddress, DisplayName, and OwnerUrn properties of those objects.

Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Select-Object SipAddress, DisplayName, OwnerUrn

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 will return all trusted application endpoints associated with the application tapp2.
This is accomplished by passing the ID tapp2 to the ApplicationId parameter.
Notice that we didn't supply a pool FQDN; this means that if an application with the ID tapp2 exists on more than one pool, endpoints for all those applications will be retrieved.
The next part of this command pipes the returned object or objects to the Select-Object cmdlet, which displays only the SipAddress, DisplayName, and OwnerUrn properties of those objects.

Get-CsTrustedApplicationEndpoint -ApplicationId tapp2 | Select-Object SipAddress, DisplayName, OwnerUrn

## PARAMETERS

### -Identity
The Identity (distinguished name), SIP address, or display name of the application endpoint to be modified.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010

Enables you to limit the returned data by filtering on specific attributes for Microsoft Lync Server 2010.
For example, you can limit returned data to contacts whose display names or SIP addresses match a certain wildcard pattern.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only contacts that have been enabled for  Enterprise Voice would look like this: {EnterpriseVoiceEnabled -eq $True}, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value.



Below Content Applies To: Lync Server 2013

Enables you to limit the returned data by filtering on specific attributes for Lync Server.
For example, you can limit returned data to contacts whose display names or SIP addresses match a certain wildcard pattern.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only contacts that have been enabled for Enterprise Voice would look like this: {EnterpriseVoiceEnabled -eq $True}, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value.



Below Content Applies To: Skype for Business Server 2015

Enables you to limit the returned data by filtering on specific attributes for Skype for Business Server 2015.
For example, you can limit returned data to contacts whose display names or SIP addresses match a certain wildcard pattern.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only contacts that have been enabled for Enterprise Voice would look like this: {EnterpriseVoiceEnabled -eq $True}, with EnterpriseVoiceEnabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value.



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

### -ApplicationId
The application ID of the trusted application for the endpoint you want to retrieve.

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

### -Credential
Alternate credentials to be used to retrieve the endpoint.
You can retrieve a PSCredential object by calling the Get-Credential cmdlet.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
The OU in which the endpoint resides.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The maximum number of endpoint records to retrieve.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedApplicationPoolFqdn
The fully qualified domain name (FQDN) of the trusted application pool associated with the application for the endpoint you want to retrieve.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String.
Accepts a pipelined string value representing the Identity of a user account.

## OUTPUTS

###  
Retrieves an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f66ac464-31ef-4aa3-9b79-f9e67ebc1475(OCS.14).aspx)

[New-CsTrustedApplicationEndpoint]()

[Remove-CsTrustedApplicationEndpoint]()

[Set-CsTrustedApplicationEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/f66ac464-31ef-4aa3-9b79-f9e67ebc1475(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f66ac464-31ef-4aa3-9b79-f9e67ebc1475(OCS.16).aspx)

