---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csphonenumberassignment
applicable: Microsoft Teams
title: Get-CsPhoneNumberAssignment
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:
---

# Get-CsPhoneNumberAssignment

## SYNOPSIS
This cmdlet displays information about one or more phone numbers.

## SYNTAX

### Assignment (Default)
```powershell
Get-CsPhoneNumberAssignment [-ActivationState <string>] [-AssignedPstnTargetId <string>] [-AssignmentCategory <string>]
 [-CapabilitiesContain <string>] [-CivicAddressId <string>] [-Filter <String>] [-IsoCountryCode <string>]
 [-LocationId <string>] [-NetworkSiteId <string>] [-NumberType <string>] [-PstnAssignmentStatus <string>] [-Skip <int>] [-TelephoneNumber <string>]
 [-TelephoneNumberContain <string>] [-TelephoneNumberGreaterThan <string>] [-TelephoneNumberLessThan <string>]
 [-TelephoneNumberStartsWith <string>] [-Top <int>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet displays information about one or more phone numbers. You can filter the phone numbers to return by using different parameters.

Returned results are sorted by TelephoneNumber in ascending order.

If you are using both -Skip X and -Top Y for filtering, the returned results will first be skipped by X, and then the top Y results will be returned.

By default, this cmdlet returns a maximum of 500 results. A maximum of 1000 results can be returned using -Top filter. If you need to get more than 1000 results, a combination of -Skip and -Top filtering can be used to list incremental returns of 1000 numbers. If a full list of telephone numbers acquired by the tenant is required, you can use [Export-CsAcquiredPhoneNumber](./export-csacquiredphonenumber.md) cmdlet to download a list of all acquired telephone numbers.

## EXAMPLES

### Example 1
```powershell
Get-CsPhoneNumberAssignment -TelephoneNumber +14025551234
```
```output
TelephoneNumber         : +14025551234
OperatorId              : 2b24d246-a9ee-428b-96bc-fb9d9a053c8d
NumberType              : CallingPlan
ActivationState         : Activated
AssignedPstnTargetId    : dc13d97b-7897-494e-bc28-6b469bf7a70e
AssignmentCategory      : Primary
Capability              : {UserAssignment}
City                    : Omaha
CivicAddressId          : 703b30e5-dbdd-4132-9809-4c6160a6acc7
IsoCountryCode          : US
IsoSubdivision          : Nebraska
LocationId              : 407c17ae-8c41-431e-894a-38787c682f68
LocationUpdateSupported : True
NetworkSiteId           :
PortInOrderStatus       :
PstnAssignmentStatus    : UserAssigned
PstnPartnerId           : 7fc2f2eb-89aa-41d7-93de-73d015d22ff0
PstnPartnerName         : Microsoft
NumberSource            : Online
ReverseNumberLookup		: {}
```
This example displays information about the Microsoft Calling Plan subscriber phone number +1 (402) 555-1234. You can see that it is assigned to a user.

### Example 2
```powershell
Get-CsPhoneNumberAssignment -TelephoneNumber "+12065551000;ext=524"
```
```output
TelephoneNumber         : +12065551000;ext=524
OperatorId              : 83d289bc-a4d3-41e6-8a3f-cff260a3f091
NumberType              : DirectRouting
ActivationState         : Activated
AssignedPstnTargetId    : 2713551e-ed63-415d-9175-fc4ff825a0be
AssignmentCategory      : Primary
Capability              : {ConferenceAssignment, VoiceApplicationAssignment, UserAssignment}
City                    :
CivicAddressId          : 00000000-0000-0000-0000-000000000000
IsoCountryCode          :
IsoSubdivision          :
LocationId              : 00000000-0000-0000-0000-000000000000
LocationUpdateSupported : True
NetworkSiteId           :
PortInOrderStatus       :
PstnAssignmentStatus    : UserAssigned
PstnPartnerId           :
PstnPartnerName         :
NumberSource            : OnPremises
ReverseNumberLookup		: {}
```
This example displays information about the Direct Routing phone number +1 (206) 555-1000;ext=524. You can see that it is assigned to a user.

### Example 3
```powershell
Get-CsPhoneNumberAssignment -CapabilitiesContain "VoiceApplicationAssignment,ConferenceAssignment"
```
This example returns all phone numbers that have both the capability VoiceApplicationAssignment and the capability ConferenceAssignment assigned, but phone numbers that have only one of these capabilities assigned won't be returned.

### Example 4
```powershell
Get-CsPhoneNumberAssignment -AssignedPstnTargetId user1@contoso.com
```
This example returns information about the phone number assigned to user1@contoso.com.

### Example 5
```powershell
Get-CsPhoneNumberAssignment -AssignedPstnTargetId aa1@contoso.com
```
This example returns information about the phone number assigned to resource account aa1@contoso.com.

### Example 6
```powershell
Get-CsPhoneNumberAssignment -ActivationState Activated -CapabilitiesContain VoiceApplicationAssignment -PstnAssignmentStatus Unassigned
```
This example returns information about all activated phone numbers with the capability VoiceApplicationAssignment that are not assigned.

### Example 7
```powershell
Get-CsPhoneNumberAssignment -TelephoneNumberContain "524"
```
This example returns information about all phone numbers that contain the digits 524, including the phone number with extension 524 used in example 2.

### Example 8
```powershell
(Get-CsPhoneNumberAssignment | Where-Object {$_.NumberType.Contains('CallingPlan') -and $_.Capability.Contains('UserAssignment') -and ($_.PstnAssignmentStatus.Contains('UserAssigned') -or $_.PstnAssignmentStatus.Contains('Unassigned'))}).Count
```
This example returns the number of Calling Plan subscriber phone numbers that are either assigned or not assigned to users.

### Example 9
```powershell
Get-CsPhoneNumberAssignment -Top (50::500)
```
This example returns all phone numbers in the record between sequence 50 to 500. This parameter can be used to get upto a maximum 1000 results at a time.

### Example 10
```powershell
Get-CsPhoneNumberAssignment -Skip 1000 -Top 1000
```
This example returns all phone numbers sequenced between 1001 to 2000 in the record of phone numbers.

### Example 11
```powershell
Get-CsPhoneNumberAssignment -AssignedPstnTargetId 'TeamsSharedCallingRoutingPolicy|Tag:SC1'
```
This example returns all phone numbers assigned as emergency numbers in the Teams shared calling routing policy instance SC1.

### Example 12
```powershell
Get-CsPhoneNumberAssignment -TelephoneNumber "+12065551000;ext=524"
```
```output
TelephoneNumber         : +12065551000;ext=524
OperatorId              : 83d289bc-a4d3-41e6-8a3f-cff260a3f091
NumberType              : DirectRouting
ActivationState         : Activated
AssignedPstnTargetId    : 2713551e-ed63-415d-9175-fc4ff825a0be
AssignmentCategory      : Primary
Capability              : {ConferenceAssignment, VoiceApplicationAssignment, UserAssignment}
City                    :
CivicAddressId          : 00000000-0000-0000-0000-000000000000
IsoCountryCode          :
IsoSubdivision          :
LocationId              : 00000000-0000-0000-0000-000000000000
LocationUpdateSupported : True
NetworkSiteId           :
PortInOrderStatus       :
PstnAssignmentStatus    : UserAssigned
PstnPartnerId           :
PstnPartnerName         :
NumberSource            : OnPremises
ReverseNumberLookup		: {SkipInternalVoip}
```
This example displays when SkipInternalVoip option is turned on for a number.

### Example 13
```powershell
Get-CsPhoneNumberAssignment -Filter "TelephoneNumber -eq '+12065551000'"
```
```output
TelephoneNumber         : +12065551000
OperatorId              : 83d289bc-a4d3-41e6-8a3f-cff260a3f091
NumberType              : DirectRouting
ActivationState         : Activated
AssignedPstnTargetId    : 2713551e-ed63-415d-9175-fc4ff825a0be
AssignmentCategory      : Primary
Capability              : {ConferenceAssignment, VoiceApplicationAssignment, UserAssignment}
City                    :
CivicAddressId          : 00000000-0000-0000-0000-000000000000
IsoCountryCode          :
IsoSubdivision          :
LocationId              : 00000000-0000-0000-0000-000000000000
LocationUpdateSupported : True
NetworkSiteId           :
PortInOrderStatus       :
PstnAssignmentStatus    : UserAssigned
PstnPartnerId           :
PstnPartnerName         :
NumberSource            : OnPremises
ReverseNumberLookup		: {}
```
This example shows a way to use -Filter parameter to display information of a specific number.

### Example 14
```powershell
Get-CsPhoneNumberAssignment -Filter "TelephoneNumber -like '+12065551000' -and NumberType -eq 'DirectRouting'"
```
```output
TelephoneNumber         : +12065551000
OperatorId              : 83d289bc-a4d3-41e6-8a3f-cff260a3f091
NumberType              : DirectRouting
ActivationState         : Activated
AssignedPstnTargetId    : 2713551e-ed63-415d-9175-fc4ff825a0be
AssignmentCategory      : Primary
Capability              : {ConferenceAssignment, VoiceApplicationAssignment, UserAssignment}
City                    :
CivicAddressId          : 00000000-0000-0000-0000-000000000000
IsoCountryCode          :
IsoSubdivision          :
LocationId              : 00000000-0000-0000-0000-000000000000
LocationUpdateSupported : True
NetworkSiteId           :
PortInOrderStatus       :
PstnAssignmentStatus    : UserAssigned
PstnPartnerId           :
PstnPartnerName         :
NumberSource            : OnPremises
ReverseNumberLookup		: {}
```
This example shows a way to get filtered results using multiple Filter parameters.


## PARAMETERS

### -ActivationState
Filters the returned results based on the number type. Supported values are Activated, AssignmentPending, AssignmentFailed, UpdatePending, and UpdateFailed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignedPstnTargetId
Filters the returned results based on the user or resource account ID the phone number is assigned to. Supported values are UserPrincipalName, SIP address, ObjectId, and the Teams shared calling routing policy instance name.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCategory
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CapabilitiesContain
Filters the returned results based on the capabilities assigned to the phone number. You can specify one or more capabilities delimited by a comma. Supported capabilities are ConferenceAssignment, VoiceApplicationAssignment, UserAssignment, and TeamsPhoneMobile.

If you specify only one capability, you will get all phone numbers returned that have that capability assigned. If you specify a comma separated list for instance like
ConferenceAssignment, VoiceApplicationAssignment you will get all phone numbers that have both capabilities assigned, but you won't get phone numbers that have only
VoiceApplicationAssignment or ConferenceAssignment assigned as capability.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CivicAddressId
Filters the returned results based on the CivicAddressId assigned to the phone number. You can get the CivicAddressId by using [Get-CsOnlineLisCivicAddress](https://learn.microsoft.com/powershell/module/teams/get-csonlineliscivicaddress).

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This can be used to filter on one or more parameters within the search results. 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsoCountryCode
Filters the returned results based on the ISO 3166-1 Alpha-2 country code assigned to the phone number.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationId
Filters the returned results based on the LocationId assigned to the phone number. You can get the LocationId by using [Get-CsOnlineLisLocation](https://learn.microsoft.com/powershell/module/teams/get-csonlinelislocation).

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteId
This parameter is reserved for internal Microsoft use.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberType
Filters the returned results based on the number type. Supported values are DirectRouting, CallingPlan, and OperatorConnect.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PstnAssignmentStatus
Filters the returned results based on the assignment status. Support values are Unassigned, UserAssigned, ConferenceAssigned, VoiceApplicationAssigned, ThirdPartyAppAssigned, and PolicyAssigned.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Skip
Skips the first X returned results and the default value is 0.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
Filters the returned results to a specific phone number. It is optional to specify a prefixed "+". The phone number can't have "tel:" prefixed.
We support Direct Routing numbers with extensions using the formats +1206555000;ext=1234 or 1206555000;ext=1234.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumberContain

Filters the returned results based on substring match for the specified string on TelephoneNumber. To search for a number with an extension, you need to specify
the digits of the extension. For supported formats see TelephoneNumber.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumberGreaterThan
Filters the returned results based on greater than match for the specified string on TelephoneNumber. Can be used together with TelephoneNumberLessThan to specify a
range of phone numbers to return results for. For supported formats see TelephoneNumber.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumberLessThan
Filters the returned results based on less than match for the specified string on TelephoneNumber. Can be used together with TelephoneNumberGreaterThan to specify a
range of phone numbers to return results for. For supported formats see TelephoneNumber.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumberStartsWith
Filters the returned results based on starts with string match for the specified string on TelephoneNumber. For supported formats see TelephoneNumber.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Returns the first X returned results and the default value is 500.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### ActivationState
The activation state of the telephone number.

### AssignedPstnTargetId
The ID of the object the phone number is assigned to, either the ObjectId of a user or resource account or the policy instance ID of a Teams shared calling routing policy instance.

### AssignmentCategory
This parameter is reserved for internal Microsoft use.

### Capability
The list of capabilities assigned to the phone number.

### City
The city where the phone number is located.

### CivicAddressId
The ID of the CivicAddress assigned to the phone number.

### IsoCountryCode
The ISO country code assigned to the phone number.

### IsoSubDivision
The subdivision within the country/region assigned to the phone number, for example, the state for US phone numbers.

### LocationId
The ID of the Location assigned to the phone number.

### LocationUpdateSupported
Boolean stating if updating of the location assigned to the phone number is allowed.

### NetworkSiteId
This parameter is reserved for internal Microsoft use.

### NumberSource
The source of the phone number. Online for phone numbers assigned in Microsoft 365 and OnPremises for phone numbers assigned in AD on-premises and synchronized into Microsoft 365.

### NumberType
The type of the phone number.

### OperatorId
The ID of the operator.

### PortInOrderStatus
The status of any port in order covering the phone number.

### PstnAssignmentStatus
The assignment status of the phone number.

### PstnPartnerId
The ID of the PSTN partner providing the phone number.

### PstnPartnerName
The name of the PSTN partner.

### TelephoneNumber
The phone number. The number is always displayed with prefixed "+", even if it was not assigned using prefixed "+".

The object returned is of type SkypeTelephoneNumberMgmtCmdletAcquiredTelephoneNumber.

### ReverseNumberLookup
Status of Reverse Number Lookup (RNL). When it is set to SkipInternalVoip, the calls are handled through external PSTN connection instead of internal VoIP lookup.

## NOTES
The cmdlet is available in Teams PowerShell module 4.0.0 or later. The parameter AssignmentCategory was introduced in Teams PowerShell module 5.3.1-preview. The parameter NetworkSiteId was introduced in Teams PowerShell module 5.5.0. The output parameter NumberSource was introduced in Teams PowerShell module 5.7.0.

The cmdlet is only available in commercial and GCC cloud instances.

## RELATED LINKS
[Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment)

[Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment)
