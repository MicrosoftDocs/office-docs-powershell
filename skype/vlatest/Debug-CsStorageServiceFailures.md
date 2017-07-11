---
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Debug-CsStorageServiceFailures

## SYNOPSIS
Use the Debug-CsStorageServiceFailures cmdlet to return debugging data for the Skype for Business Storage Service.

## SYNTAX

```
Debug-CsStorageServiceFailures [-AdapterId <Guid>] [-Binding <String>] [-Component <Component>]
 [-EndTime <DateTime>] [-Force] [-HostNameStorageService <String>] [-OutFileName <String>] [-SipUri <String>]
 [-StartTime <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The information returned can vary by system configuration.
The following is a generic sample of the information returned with for a user specified by the SipUri parameter.

AdapterId : bc24207f-08a7-4569-b984-a90f78a49d46

EndpointId : archcdruser2@vdomain.com

EndpointStatusTime : 5/8/2015 6:33:52 PM

EndpointStatusDetail : StoreWebException: code=ErrorEwsAutodiscover, reason=GetUserSettings

failed, smtpAddress=archcdruser0@vdomain.com, Autodiscover

Uri=https://dc.vdomain.com/autodiscover/badautodiscover.svc, Autodiscover

WebProxy=\<NULL\>, WebExceptionStatus=ProtocolError ---\>

System.Net.WebException: The remote server returned an error: (404) Not

Found.

at System.Net.HttpWebRequest.GetResponse()

at Microsoft.Exchange.WebServices.Data.EwsHttpWebRequest.Microsoft.Exchan

ge.WebServices.Data.IEwsHttpWebRequest.GetResponse()

at Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRequest.Intern

alExecute()

--- End of inner exception stack trace ---

at Microsoft.Rtc.Internal.Storage.Exchange.ExchangeContext.SendGetUserSet

tingsRequest(StoreContext ctx, String smtpAddress) in c:\depot\lcs\hf\src\de

v\server\lcs\lyss\LyssService\Exchange\ExchangeContext.cs:line 250

at Microsoft.Rtc.Internal.Storage.Exchange.ExchangeContext.GetUserEwsSett

ings(StoreContext ctx, String smtpAddress, CacheMode cacheMode) in c:\depot\

lcs\hf\src\dev\server\lcs\lyss\LyssService\Exchange\ExchangeContext.cs:line

656

Other :

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example returns debugging information about storage service failures relating to user kmyer@contoso.com.

Debug-CsStorageServiceFailures -SipURI kmyer@contoso.com

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

This example returns debugging information about storage service failures relating to the conversation history component.

Debug-CsStorageServiceFailures -Component ConversationHistory

## PARAMETERS

### -AdapterId
Specifies the GUID of the data adapter on which to gather the debugging information.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: g
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Binding
Specifies the Windows Communication Foundation (WCF) binding.
A WCF binding determines the transport, encoding, and protocol details required for clients and services to communicate with each other.
Valid values are:

NetNamedPipe

NetTCP

```yaml
Type: String
Parameter Sets: (All)
Aliases: b
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Component
Specifies the storage service component for which debug information will be returned.
Acceptable values for the Component parameter are:

ConversationHistory

ExchangeArchiving

SqlArchiving

QoE

CDR

LegalIntercept

DataPurge

Other

```yaml
Type: Component
Parameter Sets: (All)
Aliases: c
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndTime
The EndDate parameter specifies the end date of the date range.

Use the short date format defined in the Regional Options settings for the computer on which the command is run.
For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010.
You can enter the date only, or you can enter the date and time of day.
If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HostNameStorageService
Fully qualified domain name of the server where the Skype for Business Storage Service is running.
This parameter is required if the Binding parameter is set to NetTCP.

```yaml
Type: String
Parameter Sets: (All)
Aliases: h
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutFileName
Specifies the full path of where to write a text file containing the debug results.
Otherwise, they are written to the console.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipUri
Specifies the Session Initiation Protocol (SIP) Uniform Resource Identifier (URI) of the user on which to collect debug data.
This is the SIPAddress property of the user as returned by the Get-CsUser cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: s
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartTime
The StartDate parameter specifies the start date of the date range.

Use the short date format defined in the Regional Options settings for the computer on which the command is run.
For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010.
You can enter the date only, or you can enter the date and time of day.
If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".

```yaml
Type: DateTime
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

## OUTPUTS

###  
The cmdlet returns debugging information as a System.String.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/86984e2a-3631-48c5-82f9-d3289d69ec3f(OCS.16).aspx)

