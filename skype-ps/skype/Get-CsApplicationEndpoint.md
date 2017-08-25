---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsApplicationEndpoint

## SYNOPSIS
Retrieves endpoints for the Application service.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsApplicationEndpoint [[-Identity] <UserIdParameter>] [-ApplicationId <String>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-Filter <String>] [-OU <OUIdParameter>]
 [-PoolFqdn <String>] [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves one or more application contacts from Active Directory Domain Services.
These objects are stored in Active Directory in the Application Contacts container of the RTC service.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsApplicationEndpoint
```

This example retrieves information about all application endpoints defined within the Skype for Business Server 2015 deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsApplicationEndpoint -Filter {DisplayName -like "*endpoint*"}
```

Example 2 retrieves all application endpoints that have the string "endpoint" anywhere within their display name.
To do this, the command uses the Filter parameter.
The value of the parameter filters to find endpoint objects that have a display name (DisplayName) that contains (-like) the string endpoint (*endpoint* - the wildcard characters indicate that any characters can come before or after the string endpoint, meaning endpoint can be anywhere within the display name).

### -------------------------- Example 3 --------------------------
```
Get-CsApplicationEndpoint -ApplicationId tapp2 | Select-Object Identity, SipAddress, DisplayName, OwnerUrn
```

Example 3 returns all application endpoints associated with the application urn:application:tapp2.
This is accomplished by passing the ID tapp2 to the ApplicationId parameter.
Notice that we didn't supply a pool FQDN; this means that if an application with the ID tapp2 exists on more than one pool, endpoints for all those applications will be retrieved.
The next part of this command pipes the returned object or objects to the Select-Object cmdlet, which displays only the Identity, SipAddress, DisplayName, and OwnerUrn properties of those objects.


## PARAMETERS

### -Identity
The Identity, SIP address, or display name of the application endpoint to retrieve.
The Identity consists of the distinguished name of the endpoint.
This will typically contain a globally unique identifier (GUID) as part of the CN, for example: 

`CN={8811fefe-e0bb-4fab-ae39-7aaeddd423dc},CN=Application Contacts,CN=RTC Service,CN=Services,CN=Configuration,DC=Vdomain,DC=com.`

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

### -ApplicationId
The application ID of the application endpoint you want to retrieve.
The application ID is the value of the endpoint's OwnerUrn property.
For example, if the OwnerUrn property has a value of urn:application:Caa, the application ID is urn:application:Caa.
However, you can enter only the suffix, in this case Caa, to retrieve the endpoint.
For example: 

`-ApplicationId Caa`

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
Alternate credentials under which the Get operation will proceed.
You can retrieve a PSCredential object by calling the Windows PowerShell cmdlet Get-Credential.

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

### -Filter
Enables you to limit the returned data by filtering on specific attributes for Skype for Business Server.
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

### -OU
The organizational unit (OU) in which the endpoint resides.

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

### -PoolFqdn
The Fully Qualified Domain Name (FQDN) of the pool on which the application endpoint resides.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### String
Accepts a pipelined string value representing the Identity of the application endpoint.

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact


## NOTES


## RELATED LINKS

[Move-CsApplicationEndpoint]()